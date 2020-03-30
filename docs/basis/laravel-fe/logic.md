# 逻辑

## 思路

在 Laravel 中究竟要如何组织 JS 代码？我上网查过很多资料，但好像这个问题并没有被讨论的特别多，似乎大部分人仍然选择把 JS 直接写在模板里。但这真的是个好的做法吗？我仍然想使用 ES6，Prettier，ESLint 等等，而非在页面中使用 jQuery 写一些面条式代码。Laravel-Mix 提供了一整套优雅的 api，可以让我们简单得操作各种前端资源，但如何才能保证我们的逻辑是优雅的、可复用的？

我思考了很久，最终想到了一种自认为比较满意的解决方案，大意是 **将所有的逻辑都封装为方法，方法挂载在 window 上，页面上仅通过执行这个方法即可实现整个功能，而所有的功能模块都应当被 Laravel-Mix 处理**。

更详细的思路见本人的文章: [前后端不分离，也要优雅得写前端！](https://varzy.me/blog/2019/eleganter-site-fe/)

## 逻辑文件的组织

所有逻辑都应该放置在 `resources/js` 文件夹中，并且按照如下的目录结构进行组织:

* `js`:
  * `api`: 将各种接口单独拆分出接口层，存放在此
  * `components`: Vue 组件
  * `features`: 各种功能模块
  * `app.js`: 加载各种功能
  * `bootstrap.js`: 页面初始化时需要被加载的功能，以及需要挂载在 windows 上的工具，如 jQuery 等
  * `feature.js`: 注册所有的功能模块
  * `loader.js`: 功能模块加载器
  * `vue.js`: 处理 Vue 相关功能

接下来我们实现上面的思路。

修改 `resources/js/bootstrap.js`:

```js
window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');
require('bootstrap');
```

可以看到我们移除了挂载在 window 上的 lodash 和 axios 等库，因为我们完全可以在各个 JS 中单独引入它们。

修改 `resources/js/app.js`:

```js
import './bootstrap';
import './loader';
import './feature';
import './vue';
```

添加 `resources/js/vue.js`:

```js
import Vue from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

new Vue({
  el: '#app',
  components: {
    ExampleComponent
  }
});
```

## 实现功能模块

创建 `resources/js/loader.js`:

```js
window.Feature = {};
window.RegisteredFeatures = [];

window.onload = function() {
  window.RegisteredFeatures.forEach(feature => feature());
};
```

将打包后的 `app.js` 改为在 `<body>` 标签末尾加载，并取消其 `defer` 属性。还需要在其后添加 `scripts` 区块:

```html
<!-- ... -->

<script src="{{ asset('js/app.js') }}"></script>
@yield('scripts')
</body>
</html>
```

创建 `resources/js/feature.js`:

```js
import { SayHi } from './features/SayHi';

window.Feature.SayHi = (...args) => new SayHi(...args);
```

创建一个功能模块 `resources/js/features/SayHi.js`:

```js
export class SayHi {
  constructor(greeting = 'hello, world!') {
    console.log(greeting);
  }
}
```

在 `resources/views/index/index.blade.php` 中尝试使用 `SayHi` 功能:

```html
@section('scripts')
  <script>
  RegisteredFeatures.push(function () {
    Feature.SayHi('hello, world')
  });
  </script>
@endsection
```

效果如下:

![](~@assets/laravel-fe/js-sayhi.png)

## 为什么要将 app.js 放置在页面底部?

Laravel 提供的 `app.blade.php` 模板中，js 文件原本放置在 `<head>` 标签中，并且有 `defer` 参数:

```html
<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>
```

`defer` 属性的含义是: app.js 的渲染将不会阻塞后续代码的执行，但只有当 dom 渲染完毕后，app.js 从开始执行。但在我们的方案中，需要将各种功能模块显式得放置在页面的末尾，这就导致末尾的 js 代码 **一定先于** 有 `defer` 属性的 app.js 执行，而这时 `window.RegisteredFeatures` 和 `window.Feature` 是 `undefined`，所以就会引发异常。

但如果我们简单地去掉 `defer` 属性，浏览器就会先将 app.js 加载完毕后再渲染 dom，导致白屏时间变长。所以把 app.js 放在 `</body>` 标签前是一种折中的方案。

## 使用 Typescript

:::tip 来自笔者的弹幕
本人对 TS 的了解并不算特别深，基本也仅使用了 TS 的类型推导能力，很多地方都还很像 AnyScript。后续这部分可以被优化。
:::

首先，重命名 `resources/js` 目录下所有的 `.js` 文件为 `.ts`。

接着更新 `webpack.mix.js`:

```js
mix
  .ts('resources/js/app.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');
```

执行 `npm run watch`，Laravel-Mix 将自动安装一些 TS 相关依赖，如果出现报错也没关系，先停掉 npm 进程。

安装 jQuery 的类型声明文件和 Vue 的 TS 支持:

```bash
npm i -D @types/jquery vue-class-component
```

在项目根目录下创建 `tsconfig.json`:

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "experimentalDecorators": true
    },
    "include": [
        "resources/js/**/*"
    ]
}
```

调整 `resources/js/loader.js`:

```ts
interface IFeature {
  [propName: string]: () => void;
}

interface Window {
  Feature: IFeature;
  RegisteredFeatures: Function[];
}

window.Feature = window.Feature || {};
window.RegisteredFeatures = window.RegisteredFeatures || [];

window.onload = function() {
  window.RegisteredFeatures.forEach(feature => feature());
};
```

调整 `resources/js/feature.ts`:

```ts
import { SayHi } from './features/SayHi';

const WF = (window as any).Feature;

WF.SayHi = (...args) => new SayHi(...args);
```

调整 `js/components/ExampleComponent.vue`:

```vue
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>

          <div class="card-body">
            I'm an example component.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class ExampleComponent extends Vue {
    private mounted() {
      console.log('Component mounted.');
    }
  }
</script>
```

重新执行 `npm run watch`，检查是否存在报错。也可以在页面上使用 `example-component` 组件检验 Vue 组件的 TS 支持情况。

![](~@assets/laravel-fe/support-ts.png)

## 使用 ESLint

To be continued.
