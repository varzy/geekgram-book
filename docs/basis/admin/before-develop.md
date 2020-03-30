# 开发前的调优

## 添加 .editorconfig

确保你的编辑器支持 `Editorconfig` 后，在项目根目录创建 `.editorconfig`，填入以下内容:

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
tab_width = 2
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

## 添加 Prettier 配置

在项目根目录下新建 `.prettierrc.js`，填入以下内容:

```js
module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx,vue}',
      options: {
        semi: true,
        singleQuote: true,
        printWidth: 100
      }
    }
  ]
};
```

> 具体配置项请查阅 [官方文档](https://prettier.io/docs/en/options.html)。

接着执行 `yarn lint`，即可对项目代码进行整体格式化。

## 整理 App.vue

编辑 `src/App.vue`，修改为以下内容:

```vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
```

这一步意味着我们所有的页面都将由 Vue Router 统一接管，App.vue 仅作为渲染 dom 时使用的根节点。

## 整理文件

删除以下文件:

* `src/assets/logo.png`
* `src/components/HelloWorld.vue`
* `src/views/About.vue`
* `src/views/Home.vue`

新增以下文件:

* `src/assets/.gitkeep`
* `src/components/.gitkeep`
* `src/views/Index.vue`

## 整理路由

Vue Router 可以通过组件的懒加载保证用户在首次进入不必缓存所有的页面，而是只有在首次进入页面时再去拉取当前页面对应组件的文件。因此项目中大部分页面都会使用懒加载，但我们在开发时使用了热重载技术，我们可以将所有的文件全部缓存以提升开发体验。因此我们可以封装一个专门用于引入组件的方法，保证在开发环境下引入所有组件，生产环境下则实现懒加载。

新增 `src/router/importer.ts`:

```ts
export default process.env.NODE_ENV === 'development'
  ? (path: string) => require(`@/views/${path}.vue`).default
  : (path: string) => () => import(`@/views/${path}.vue`);
```

修改 `src/router/index.ts`:

```ts
import Vue from 'vue';
import VueRouter from 'vue-router';
import _import from './importer';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: _import('Index')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
```

编辑 `src/views/Index.vue`:

```vue
<template>
  <div class="index">hello, world</div>
</template>

<script>
export default {
  name: 'Index'
};
</script>
```

现在运行 `yarn serve`，就能在 `http://localhost:8080` 看到页面上的 `hello, world` 字样了。

![](~@assets/vue-hello-world.png)

## 公共样式组织

与 Laravel 中的前端一样，我们也需要对公共样式进行合理的组织。分别新建以下文件:

* `src/styles/main.scss`
* `src/styles/_variables.scss`
* `src/styles/_mixins.scss`
* `src/styles/_reset.scss`
* `src/styles/_common.scss`
* `src/styles/_hack.scss`

编辑 `src/styles/main.scss`，引入其它子文件:

```scss
// Resources
@import "variables";
@import "mixins";

// Reset
@import "reset";

// Libraries

// Common
@import "common";

// Hack
@import "hack";
```

本项目仍然选择 [Normalize.css](https://necolas.github.io/normalize.css/) 来消除浏览器之间的样式差异。首先安装 Normalize.css:

```bash
yarn add normalize.css
```

接着在我们的 `_reset.scss` 之前引入。编辑 `src/styles/main.scss`:

```scss
// Reset
@import "~normalize.css/normalize.css";
@import "reset";
```

接着我们在 `src/main.ts` 中引入 `src/styles/main.scss`，即可实现公共样式的注册:

```ts
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles
import './styles/main.scss';
```

## 支持全局样式资源

我们有些公共资源是应当在整个项目内共享的，比如变量和 mixins，但在 Vue 组件中想要使用这些资源时，需要先引入它们。好在我们通过简单的配置实现全局共享这些样式资源，详见 [向预处理器 Loader 传递选项](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)

在项目根目录创建 `vue.config.js`，填入以下内容:

```js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/resources.scss";`
      }
    }
  }
};
```

新建 `src/styles/resources.scss` 用于存放全局的资源文件。我们完全可以直接引入 `_variables.scss` 和 `_mixins.scss`:

```scss
@import "variables";
@import "mixins";
```

为了检验是否生效，我们可以编辑 `src/styles/_variables.scss`，添加一个主题色:

```scss
$g-color-primary: #5f6caf;
```

接着编辑 `src/views/Index.vue`，填入以下内容:

```vue
<template>
  <div class="index">
    <p class="greeting">hello, world</p>
  </div>
</template>

<script>
export default {
  name: 'Index'
};
</script>

<style lang="scss" scoped>
.index {
  .greeting {
    color: $g-color-primary;
  }
}
</style>
```

**重新执行 `yarn serve` 后**，就可以看到 hello, world 变色了。

![](~@assets/vue-resources.png)

> 事实上每次修改 vue.config.js 之后，都需要重启服务才能生效。
