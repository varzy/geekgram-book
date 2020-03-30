# 调试器

安装 [laravel-debugbar](https://github.com/barryvdh/laravel-debugbar):

```bash
composer require --dev barryvdh/laravel-debugbar
```

生成配置文件:

```bash
php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider"
```

查看配置文件 `config/debugbar.php` 中的 `enabled` 选项，可以看到 `laravel-debugbar` 是否启用取决于 `.env` 中的 `DEBUGBAR_ENABLED` 值。为了使 `.env` 尽可能简洁，我们此处使用 `APP_DEBUG` 来控制 debugbar 是否启用。

修改 `config/debugbar.php` 中的 `enabled` 选项:

```php
'enabled' => env('APP_DEBUG', false),
```
