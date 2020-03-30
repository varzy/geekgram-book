# 数据表及模型

在阅读这一章前，笔者强烈建议你先按照顺序阅读以下文档:

1. [数据库 / 数据库迁移](https://learnku.com/docs/laravel/6.x/migrations/5173)
2. [Eloquent ORM / 快速入门](https://learnku.com/docs/laravel/6.x/eloquent/5176)
3. [Eloquent ORM / 模型关联](https://learnku.com/docs/laravel/6.x/eloquent-relationships/5177)

## 物理表及关系分析

第一阶段，我们的小小论坛只需要有以下几张物理表:

* `users`: 用户
* `posts`: 帖子
* `categories`: 标签
* `tags`: 标签

他们的关联关系分别是:

* 1 `user` <==> n `posts`
* 1 `category` <==> n `posts`
* n `posts` <==> n `tags`

在 Laravel 里，只要分析好了表关系，增删改查逻辑其实就已经完成了一半。这是因为 Laravel 提供了一个强大的 ORM 工具: [Eloquent ORM](https://learnku.com/docs/laravel/6.x/eloquent/5176)。有了它我们甚至可以一行 SQL 都不写，也能随心所欲地操纵数据。

:::tip 来自笔者的弹幕
当然啦，凡事都有利弊，Eloquent ORM 框架也被很多人吐槽，槽点网上一搜也是一大把。但是吧，笔者作为一个连左关联右关联都忘得差不多的人，也多亏有了它我才能写下此文。对我来说能把项目顺当跑起来就行了，灵活？性能？害，要啥自行车。
:::

## 创建模型及迁移文件

分别创建 `Post`, `Category`, `Tag` 模型及迁移文件:

```bash
php artisan make:model Models/Post -m
php artisan make:model Models/Category -m
php artisan make:model Models/Tag -m
```

除此之外，我们还需要一张中间表用来存放 `Post` 和 `Tag` 的 n:n 关系:

```bash
php artisan make:migration create_post_tag_table
```

## 编撰迁移文件

编辑 `database/migrations/[date]_create_posts_table.php`:

```php
Schema::create('posts', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->unsignedBigInteger('user_id')->comment('用户 id');
    $table->unsignedBigInteger('category_id')->comment('分类 id');
    $table->string('title', 255)->comment('帖子标题');
    $table->text('body')->comment('帖子内容');
    $table->timestamps();
});
```

编辑 `database/migrations/[date]_create_categories_table.php`:

```php
Schema::create('categories', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->string('name', 64)->unique()->comment('分类名称');
    $table->string('alias', 64)->unique()->comment('分类别名');
    $table->text('description')->comment('分类描述');
    $table->timestamps();
});
```

编辑 `database/migrations/[date]_create_tags_table.php`:

```php
Schema::create('tags', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->string('name', 32)->unique()->comment('标签名称');
    $table->text('description')->comment('标签描述');
    $table->timestamps();
});
```

编辑 `database/migrations/[date]_create_post_tag_table.php`:

```php
Schema::create('post_tag', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->unsignedBigInteger('tag_id')->comment('标签 id');
    $table->unsignedBigInteger('post_id')->comment('帖子 id');
    $table->timestamps();
});
```

## 编撰模型文件

编辑 `app/Models/Post.php`:

```php
class Post extends Model
{
    public $table = 'posts';

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tag', 'post_id', 'tag_id');
    }
}
```

编辑 `app/Models/Category.php`

```php
class Category extends Model
{
    public $table = 'categories';

    public function posts()
    {
        return $this->hasMany(Post::class, 'category_id', 'id');
    }
}
```

编辑 `app/Models/Tag.php`

```php
class Tag extends Model
{
    public $table = 'tags';

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_tag', 'tag_id', 'post_id');
    }
}
```

## 执行数据库迁移

确保 `.env` 中的数据库连接信息有效，执行:

```bash
php artisan migrate
```

成功后即可在数据库 GUI 中看到上面添加的数据表。

![](~@assets/migrated.png)
