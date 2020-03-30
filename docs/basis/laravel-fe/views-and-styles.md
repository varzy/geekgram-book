# 视图及样式

既然要开始编排页面了，那我们肯定绕不开前端话题。Laravel 提供了一整套近乎完美的前端开发工具可以让前端开发者尽情发挥自己的创造力。

## 视图的组织

本项目会这样组织视图文件:

* `views`
  * `layouts`: 布局视图
    * `app.blade.php`: 适用于绝大部分页面的基础布局
  * `widgets`: 可被复用的视图组件。其中的视图均以 `_` 开头
    * `_header.blade.php`: 页头
    * `_footer.blade.php`: 页脚
  * `[page]s`: 各种资源视图，应使用名词的复数形式，如: `posts`
    * `index.blade.php`: 列表
    * `show.blade.php`: 详情
    * `create.blade.php`: 创建页面
    * `edit.blade.php`: 编辑页面
    * `create_and_edit.php`: 如果创建页面和编辑页面布局相似，则可以合并为一个文件

## CSS 选择器的组织

在为视图编写样式时，为了减少样式冲突，我们约定: **每个视图文件拥有一个全局唯一的选择器，所有该视图的样式均从该选择器起始**。

为了实现这个约定，我们可以根据目录结构生成一个全局唯一的 CSS 选择器，如:

* `posts`
  * `index`: 内部必须有一个根 html 标签用于包裹所有 dom: `<div class="posts-index">...</div>`
  * `show`: 对应 `<div class="posts-show">...</div>`

由于我们的所有样式都将采用 Scss 语法编写，所以我们还可以约定: 使用 `-` 表示层级，使用 `_` 表示连字符。这样我们就构建出了一套简化版的 CSS BEM。以下是一个小 demo:

```html
<header class="header">
  <div class="header-logo">
    <div class="header-logo-img"></div>
    <div class="header-logo-text"></div>
  </div>
  <div class="header-navbar">
    <div class="header-navbar-item header-navbar-login"></div>
    <div class="header-navbar-item header-navbar-sign_up"></div>
  </div>
</header>
```

```scss
.header {
  &-logo {
    &-img {}

    &-text {}
  }

  &-navbar {
    &-item {}

    &-login {}

    &-sign_up {}
  }
}
```

## 添加 laravel/ui 依赖并生成基础视图

为了白嫖 Laravel 的基础布局文件，我们需要先创建基础布局和用户认证相关页面:

```bash
composer require laravel/ui
php artisan ui vue --auth
npm i
npm run dev
```

> 更多信息请查阅: [用户认证快速指南](https://learnku.com/docs/laravel/6.x/authentication/5151#9c81d4)。

## 优化 app.blade.php 布局

### 添加页头和页脚

分别在 `resources/views/widgets` 目录下新建 `_header.blade.php` 和 `_footer.blade.php`。

将 `app.blade.php` 中的 header 部分移入 `_header.blade.php`:

```html
<header class="widgets-header">
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    ...
  </nav>
</header>
```

在 `_footer.blade.php` 中填入以下内容:

```html
<footer class="widgets-footer p-3 border-top bg-white">
  <div class="container">&copy;{{ date('Y') }} {{ config('app.name', 'Laravel') }}</div>
</footer>
```

在 `app.blade.php` 中引入 header 和 footer:

```html
<body>
<div id="app" class="layouts-app">
  <div class="layouts-app-header">
    @include('widgets._header')
  </div>

  <main class="py-4 layouts-app-main">
    @yield('content')
  </main>

  <div class="layouts-app-footer">
    @include('widgets._footer')
  </div>
</div>
</body>
```

### 首页视图的继承

编辑 `resources/views/index/index.blade.php`，继承 `app` 布局:

```html
@extends('layouts.app')

@section('content')
  <div class="index-index container">
    <h1>Posts</h1>
    <ul>
      @foreach($posts as $post)
        <li>
          <span style="margin-right: 12px; color: rosybrown">{{ $post->category->name }}</span>
          <a>{{ $post->title }}</a>
        </li>
      @endforeach
    </ul>
    <br>

    <h1>Categories</h1>
    <div>
      @foreach($categories as $category)
        <span style="margin-right: 12px; color: rosybrown">{{ $category->name }}</span>
      @endforeach
    </div>
    <br>

    <h1>Tags</h1>
    <div>
      @foreach($tags as $tag)
        <span style="margin-right: 12px; color: rosybrown">{{ $tag->name }}</span>
      @endforeach
    </div>
  </div>
@endsection
```

效果如下:

![](~@assets/laravel-fe/basic-layout.png)

## 浏览器热重载

我们不可能每次更新前端资源后都重新执行 `npm run dev`，再去浏览器上刷新页面看效果，这样效率实在太低。好在 Laravel 为我们提供了优雅的 api 使得我们可以实现前端的 [热重载](https://laravel-mix.com/docs/4.0/browsersync)。

编辑 `webpack.mix.js`，添加热重载相关配置:

```js
mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');

mix
  .disableSuccessNotifications()
  .browserSync({
    // 此处应该填写你开发环境的项目地址
    proxy: 'geekgram.test',
    open: false
  });
```

执行 `npm run watch`，首次执行时 Laravel 将自动安装相关依赖，安装完毕后需要再次执行该命令。然后在浏览器中打开 `http://localhost:3000`，如果右上角成功出现 `Browsersync connected` 的提示则说明热重载开启成功。

![](~@assets/laravel-fe/hot-reload.png)

接下来我们编写的每一行前端资源，文件保存后就可以直接在浏览器中看到效果了。

## 样式资源的组织

样式资源统一采用 `Scss` 语法进行编写，存放在 `resources/sass` 目录下，并且按照如下的目录结构进行组织:

* `sass`
  * `views`: 与 `resources/views` 的目录结构保持一致，每个页面都有自己独立的样式文件，保证样式互不干扰
  * `_common.scss`: 公共样式
  * `_hack.scss`: 对某些外部库的样式进行强行更改。内容应尽可能得少
  * `_mixins.scss`: 公共的 mixins
  * `_reset.scss`: 重置浏览器样式。内容应尽可能得少
  * `_variables.scss`: Scss 变量
  * `app.scss`: 注册以上所有样式资源

`app.scss` 中注册全部的样式文件，并被 Laravel-Mix 进行处理。其中的样式资源必须按照一定的顺序进行加载。如:

```scss
// Fonts
@import url("https://fonts.googleapis.com/css?family=Nunito");

// Resources
@import "variables";
@import "mixins";

// Reset
@import "reset";

// Libraries
@import "~bootstrap/scss/bootstrap";

// Common
@import "common";

// Views

// Hack
@import "hack";
```

## Normalize.css

[Normalize.css](https://necolas.github.io/normalize.css/) 是一个用于消除浏览器样式差异的重置文件，在此项目中推荐使用它来消除浏览器差异而非自己书写。

```bash
npm i -D normalize.css
```

安装完毕后，在 `app.scss` 中进行注册:

```scss
// Reset
@import "~normalize.css/normalize.css";
@import "reset";
```

## 优化 app.blade.php 布局的样式

目前这套布局存在一个大问题，即页面假如不满一屏时，页脚并不会固定在页面底部，导致页面下方留有大片空白。

![](~@assets/laravel-fe/app-footer-before-turning.png)

有很多种方案可以解决这个问题，此项目中我选用 Flex 布局进行优化。

编辑 `views/layouts/app.blade.php`:

```html
<body>
<div id="app" class="layouts-app">
  <div class="layouts-app-wrapper">
    <div class="layouts-app-header">
      @include('widgets._header')
    </div>

    <main class="py-4 layouts-app-main">
      @yield('content')
    </main>
  </div>

  <div class="layouts-app-footer">
    @include('widgets._footer')
  </div>
</div>
</body>
```

创建 `resources/sass/views/layouts/_app.scss`，并填入以下内容:

```scss
.layouts-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &-wrapper {
    flex: 1;
  }

  &-footer {
    flex-shrink: 0;
  }
}
```

在 `resources/sass/app.scss` 中进行引用:

```scss
// Views
@import "views/layouts/app";
```

效果如下:

![](~@assets/laravel-fe/app-footer-after-turning.png)

## 自定义 title, keywords 和 description

为了实现更好的 SEO，我们应当让每个页面都支持定义自己的 title, keywords 和 description。

首先编辑 `layouts/app.blade.php`:

```html
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="keywords" content="@yield('keywords', implode(config('project.keywords')))">
<meta name="description" content="@yield('description', config('project.description'))">

<title>@yield('title', config('app.name', 'Laravel'))</title>
```

新建 `config/project.php`，用于存放项目相关配置:

```php
<?php

return [
    'keywords' => [
        'forum',
        'geek',
        'geekgram',
    ],
    'description' => 'Geekgram is a forum for geeks.',
];
```

这样一来，项目将默认使用 `config/project.php` 中的配置，并且可以在子视图定制页面的 title, keywords 和 description。

最后，全局搜索 `config('app.name', 'Laravel')`，并替换为 `config('app.name', 'Geekgram')`。
