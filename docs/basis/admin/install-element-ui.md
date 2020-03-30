# 使用 ElementUI

## 安装 ElementUI

> 详情请参考 [官方文档](https://element.eleme.cn/#/zh-CN/component/quickstart)

首先安装 ElementUI:

```bash
yarn add element-ui
```

在 `src/main.ts` 中引入 ElementUI 并使用:

```ts
import ElementUI from 'element-ui';
// Styles
import './styles/main.scss';

Vue.use(ElementUI, { size: 'small' });
```

接下来我们处理 ElementUI 的样式。由于样式的加载顺序会对前端页面造成影响，因此 ElementUI 的样式也应当被 `main.scss` 统一处理。

新建 `src/styles/_element-ui.scss`，填入以下内容:

```scss
$--color-primary: $g-color-primary;
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import "~element-ui/packages/theme-chalk/src/index";
```

> 详见 [在项目中改变 SCSS 变量](https://element.eleme.cn/#/zh-CN/component/custom-theme#zai-xiang-mu-zhong-gai-bian-scss-bian-liang)

接着在 `main.scss` 中引入 `_element-ui.scss`:

```scss
// Libraries
@import "element-ui";
```

## 检验效果

编辑 `src/views/Index.vue`:

```vue
<template>
  <div class="index">
    <p class="greeting">hello, world</p>
    <el-button type="primary">Button</el-button>
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

![](~@assets/installed-element-ui.png)
