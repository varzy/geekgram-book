# 填充假数据

## 创建数据填充文件

执行以下命令生成数据填充文件:

```bash
php artisan make:seed UsersTableSeeder
php artisan make:seed CategoriesTableSeeder
php artisan make:seed TagsTableSeeder
php artisan make:seed PostsTableSeeder
php artisan make:seed PostTagTableSeeder
```

编辑 `database/seeds/UsersTableSeeder.php`，创建 10 个用户:

```php
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::truncate();

        $users = factory(User::class)
            ->times(10)
            ->make()
            ->makeVisible(['password', 'remember_token']);

        User::insert($users->toArray());
    }
}
```

编辑 `database/seeds/CategoriesTableSeeder.php`，创建几个分类:

```php
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        Category::truncate();

        $presets = [
            ['name' => 'software', 'alias' => '软件'],
            ['name' => 'hardware', 'alias' => '硬件'],
            ['name' => 'mac_os', 'alias' => 'Mac OS'],
            ['name' => 'windows', 'alias' => 'Windows'],
            ['name' => 'linux', 'alias' => 'Linux'],
            ['name' => 'go', 'alias' => 'Golang'],
            ['name' => 'php', 'alias' => 'PHP'],
        ];

        foreach ($presets as $preset) {
            Category::create(array_merge($preset, ['description' => 'This is a category about ' . $preset['alias']]));
        }
    }
}
```

编辑 `database/seeds/CategoriesTableSeeder.php`，创建几个标签:

```php
use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    public function run()
    {
        Tag::truncate();

        $presets = [
            ['name' => 'Life'],
            ['name' => 'Technology'],
            ['name' => '社畜'],
            ['name' => '校招'],
            ['name' => '996'],
            ['name' => '251'],
            ['name' => '404'],
        ];

        foreach ($presets as $preset) {
            Tag::create(array_merge($preset, ['description' => 'This is a tag about ' . $preset['name']]));
        }
    }
}
```

编辑 `database/seeds/PostsTableSeeder.php`，填充帖子:

```php
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::truncate();

        $faker = app(Faker\Generator::class);
        $userIds = User::all()->pluck('id')->toArray();
        $categoryIds = Category::all()->pluck('id')->toArray();

        $posts = Collection::times(100, function () use ($faker, $userIds, $categoryIds) {
            return [
                'title'       => $faker->sentence(mt_rand(3, 10)),
                'user_id'     => $faker->randomElement($userIds),
                'category_id' => $faker->randomElement($categoryIds),
                'body'        => join("\n\n", $faker->paragraphs(mt_rand(3, 6))),
                'created_at'  => now(),
                'updated_at'  => now(),
            ];
        });

        Post::insert($posts->toArray());
    }
}
```

编辑 `database/seeds/PostTagTableSeeder.php`，为帖子和标签建立关联关系:

```php
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagTableSeeder extends Seeder
{
    public function run()
    {
        $faker = app(Faker\Generator::class);

        $postIds = Post::all()->pluck('id')->toArray();
        $tagIds = Tag::all()->pluck('id')->toArray();

        foreach ($postIds as $postId) {
            // 保证一篇帖子最多只有 3 个标签，提高填充速度
            $randomTagsCount = $faker->numberBetween(1, count($tagIds));
            $maxTagCount = $randomTagsCount <= 3 ? $randomTagsCount : 3;
            $targetTagIds = collect($tagIds)->random($faker->numberBetween(1, $maxTagCount))->all();

            foreach ($targetTagIds as $targetTagId) {
                DB::table('post_tag')->insert([
                    'tag_id'     => $targetTagId,
                    'post_id'    => $postId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
```

## 注册 Seeders

接着在 `database/seeds/DatabaseSeeder.php` 中注册刚才编写的填充文件。**注意：这些填充文件必须按照一定的先后顺序进行注册。**

```php
public function run()
{
    $this->call(UsersTableSeeder::class);
    $this->call(CategoriesTableSeeder::class);
    $this->call(TagsTableSeeder::class);
    $this->call(PostsTableSeeder::class);
    $this->call(PostTagTableSeeder::class);
}
```

## 执行填充

执行以下命令:

```bash
composer dump-autoload
php artisan db:seed
```

成功后即可在数据库 GUI 中看到刚刚填充的假数据。

![](~@assets/seeded.png)
