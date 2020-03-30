# 搭建前端工作流

## 目标

* 使用 Typescript 编写逻辑
* 使用 Scss 组织样式
* 使用 ESLint 检查代码错误
* 热重载页面
* 前端资源通过 laravel-mix 打包后输出到 public 目录下，尽可能让 webpack 处理所有前端资源
* 页面上仅通过触发方法加载逻辑，尽可能不直接书写 js 代码

## 如何实现？

1. 重命名 `resources/js ` 下的 `app.js` 和 `bootstrap.js` 为 `.ts` 格式
2. 修改 `webpack.mix.js` 文件，添加以下配置

```js
mix
  .ts('resources/js/app.ts', 'public/js/app.js')
  .ts('resources/js/bootstrap.ts', 'public/js/bootstrap.js')
  .sass('resources/sass/app.scss', 'public/css/app.css')
  .copy('resources/assets/favicon.png', ('public/favicon.png'))
  .copyDirectory('resources/static', ('public/static'));

mix
  .disableSuccessNotifications()
  .browserSync({
    proxy: 'geekgram.test',
    open: false
  });

if (mix.inProduction()) mix.version();
```
