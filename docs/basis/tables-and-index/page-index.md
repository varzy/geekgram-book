# 开发首页

为了能够看到刚刚填充的数据，我们临时开发一个首页，用于展示带有分页的帖子、全量的标签和全量的分类，同时也初步窥探 Laravel 的页面开发模式。

## 创建路由

在 `routes/web.php` 中移除之前的首页路由，改用控制器模式。

```php
//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', 'IndexController@index');
```

## 编写控制器

执行以下命令创建首页控制器:

```bash
php artisan make:controller IndexController
```

> 当然也可以在 `app/Http/Controllers` 下手动创建 `IndexController.php`，只要命名空间、类的继承等都正确即可。

编辑 `app/Http/Controllers/IndexController.php`，添加 `index` 方法:

```php
public function index()
{
    return view('index.index');
}
```

## 创建视图

创建 `resources/views/index/index.blade.php` 文件，随意填入一些文字。在浏览器中访问项目首页，如果能看到刚刚填入的内容则说明路由、控制器和视图已经联通。

## 渲染数据

我们的目标是在首页渲染出带有分页的帖子、全量的标签和全量的分类。

首先完善 `IndexController` 的 `index` 方法:

```php
public function index()
{
    $posts = Post::with(['user', 'category', 'tags'])->paginate();
    $categories = Category::all();
    $tags = Tag::all();

    return view('index.index', compact('posts', 'categories', 'tags'));
}
```

**注意: 此处的关联查询使用了 `with` 方法，这是为了解决 N + 1 问题。如果你不了解 N + 1，请务必查询文档: [预加载](https://learnku.com/docs/laravel/6.x/eloquent-relationships/5177#012e7e)**

完善 `index.blade.php`:

```html
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
```

效果如下:

![index-inited](~@assets/page-index/index-inited.png)
