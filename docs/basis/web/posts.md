# 帖子的 CURD

## 首页帖子按照时间倒序排列

首页的帖子应当按照创建时间倒序排序。修改 `IndexController` 的 `index` 方法:

```php
public function index()
{
    $posts = Post::with(['user', 'category', 'tags'])
        ->orderBy('created_at', 'desc')
        ->paginate();
    $categories = Category::all();
    $tags = Tag::all();

    return view('index.index', compact('posts', 'categories', 'tags'));
}
```

## 创建路由

帖子应当支持详情、编辑和新增。

::: tip 来自笔者的弹幕
为什么没有删除？笔者认为每个人都应当对自己的言论负责 (其实是不想考虑删除之后牵扯的各种关联关系。后续有可能会做帖子的软删除)。
:::

编辑 `web.php`:

```php
Route::resource('posts', 'PostsController')
    ->only(['show', 'create', 'edit', 'store', 'update']);
```
