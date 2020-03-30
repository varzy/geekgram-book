# 优化

## Prettier

为了减少世界上的纷争，我们也需要让前端代码的格式统一。这时候 Prettier 就站出来了。

首先安装 Prettier:

```bash
npm i -D prettier
```

在项目根目录添加 Prettier 的配置 `.pretterrc.js`:

```js
module.exports = {
  overrides: [
    {
      files: "*.{js,jsx,ts,tsx,vue}",
      options: {
        singleQuote: true,
        printWidth: 100
      }
    }
  ]
}
```

在 `package.json` 中添加用于格式化代码的脚本:

```json
"scripts": {
  "lint": "prettier --write resources/**/*.{js,ts,jsx,tsx,vue,css,scss,sass,json}"
},
```

在项目根目录创建 `.prettierignore`，它的作用和 `.gitignore` 差不多，写进这里的文件和路径将会在 Prettier 格式化过程中被忽略。

## 支持静态资源文件夹

事实上总有些资源是不可能被 Webpack 完美处理的，因此我们需要将部分资源放置到 `public` 文件夹下直接使用。但事实上我们对 public 文件夹的操作应当尽可能得少，因此我们通过 Laravel-Mix 来帮助我们处理这些资源。

在 `webpack.mix.js` 中添加以下配置:

```js
mix
  // ...
  .copyDirectory('resources/static', 'public/static');
```

在 `.prettierignore` 中添加下面一行以忽略静态资源文件夹的格式化:

```
resources/static
```

创建 `resources/static/.gitkeep`，保证该目录即使为空也可以被 git 提交。

## 为网站添加 favicon

同样的，我们也可以按照静态资源文件夹的思路为项目添加 favicon。在 `webpack.mix.js` 中添加以下配置:

```js
mix
  // ...
  // 或是 whatever.ico，只要是能被加载到的图片即可
  .copy('resources/static/favicon.png', 'public/favicon.png');
```

接着在 `resources/views/layouts/app.blade.php` 的 `<head>` 标签中引入 favicon:

```html
<head>
  <!-- ... -->
  <!-- 或是 whatever.ico，只要是能被加载到的图片即可 -->
  <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
  <!-- ... -->
</head>
```

现在我们就可以在 static 文件夹中添加一张图片作为网站的 favicon 了。

## 在生产环境下为资源添加版本号

在 `webpack.mix.js` 中添加配置:

```js
if (mix.inProduction()) mix.version();
```

修改 `resources/views/layouts/app.blade.php` 中的 `assets()` 函数为 `mix()`:

```html
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <!-- ... -->
  <link rel="shortcut icon" href="{{ mix('favicon.png') }}">
  <!-- ... -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
<!-- ... -->
<script src="{{ mix('js/app.js') }}"></script>
@yield('scripts')
</body>
</html>
```

## Vendor 提取

首先我们将 `package.json` 中的依赖项文件进行整理，区分为 `dependencies` 和 `devDependencies` 两部分。

```json
"dependencies": {
    "axios": "^0.19",
    "bootstrap": "^4.0.0",
    "jquery": "^3.2",
    "lodash": "^4.17.13",
    "normalize.css": "^8.0.1",
    "popper.js": "^1.12",
    "vue": "^2.5.17"
},
"devDependencies": {
    "@types/jquery": "^3.3.31",
    "browser-sync": "^2.26.7",
    "browser-sync-webpack-plugin": "^2.0.1",
    "cross-env": "^5.1",
    "laravel-mix": "^4.0.7",
    "prettier": "^1.19.1",
    "resolve-url-loader": "^2.3.1",
    "sass": "^1.20.1",
    "sass-loader": "7.*",
    "ts-loader": "^6.2.1",
    "typescript": "^3.7.4",
    "vue-class-component": "^7.1.0",
    "vue-template-compiler": "^2.6.10"
}
```

现在处于 `dependencies` 中的依赖项都是我们项目中会实际使用的依赖项，我们可以将这些依赖进行 vendor 分离。编辑 `webpack.mix.js`:

```js
mix
  .ts('resources/js/app.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .copyDirectory('resources/static', 'public/static')
  .extract([
    'axios',
    'bootstrap',
    'jquery',
    'lodash',
    'normalize.css',
    'popper.js',
    'vue',
  ]);
```

接着编辑 `app.blade.php`，在最下方添加以下代码:

```html
<body>
<!-- ... -->
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
@yield('scripts')
</body>
```
