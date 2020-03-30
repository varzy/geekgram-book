# 本地化

注意: 本项目并不会对页面中的文字进行本地化处理，此处支持本地化只是为了使各种提示信息、表单验证信息等出现中文。

安装 [laravel-lang](https://github.com/overtrue/laravel-lang):

```bash
composer require laravel-lang
```

在 `config/app.php` 中进行注册:

```php
'providers' => [
    // ...
    // Illuminate\Translation\TranslationServiceProvider::class,
    Overtrue\LaravelLang\TranslationServiceProvider::class,
],
```

发布中文语言包:

```bash
php artisan lang:publish zh-CN
```
