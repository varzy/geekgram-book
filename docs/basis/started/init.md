# 项目初始化

## 创建项目

使用 composer 创建一个全新的 Laravel 项目:

```bash
composer create-project --prefer-dist laravel/laravel geekgram
```

> 亦可通过 `laravel/installer` 进行安装。参考: [通过 Laravel 安装器](https://learnku.com/docs/laravel/6.x/installation/5124#060c73)

## 初始化 Git 仓库

用编辑器打开项目后，首先在 `.gitignore` 中添加一些必要的忽略:

```
.vscode
.idea
.php_cs.cache
```

接着执行以下命令:

```bash
git init && git add . && git commit -m "init"
```

## 调整 .editorconfig

你需要保证你使用的编辑器已经安装了 Editorconfig 插件。详细信息可以参考 [官网](https://editorconfig.org/)。

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 4
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[*.{blade.php,html,js,ts,jsx,tsx,vue,css,sass,scss}]
indent_size = 2
tab_width = 2
```

## 使用 php-cs-fixer 自动格式化 PHP 代码

通过 composer 安装 `php-cs-fixer`:

```bash
composer require --dev friendsofphp/php-cs-fixer
```

在项目根目录添加 `.php_cs.dist`:

```php
<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude('node_modules')
    ->exclude('vendor')
    ->exclude('storage')
    ->in(__DIR__)
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony' => true,
        'binary_operator_spaces' => [
            // 对齐双箭头操作符
            'align_double_arrow' => true,
            // 不对齐赋值操作符
            'align_equals' => false,
        ],
        'concat_space' => [
            // 保证 . 连字符左右有一个空格
            'spacing' => 'one'
        ],
    ])
    ->setFinder($finder)
;
```

> 详细配置可以参考 [官方文档](https://github.com/FriendsOfPHP/PHP-CS-Fixer)

在 `composer.json` 中添加执行脚本:

```json
"scripts": {
  "lint": "php-cs-fixer fix --diff --dry-run",
  "fix": "php-cs-fixer fix"
}
```

现在我们就可以通过执行 `composer run fix` 自动格式化代码了。

## 更新配置项

更新 `config/app.php`:

```php
# 更新时区
'timezone' => 'PRC',

# 更新语言
'locale' => 'zh-CN',

# 假数据填充的首选语言
# <https://github.com/fzaninotto/Faker#fakerproviderzh_cnpayment>
'faker_locale' => 'zh_CN',
```

更新 `.env`:

```
APP_NAME=Geekgram

# 根据你的数据库信息进行填写
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

## 更改 Model 文件的存储位置

在我们的项目中，要求所有的模型文件都存放到 `app/Models` 文件夹下而非直接放入 `app` 目录下。因此我们需要做如下改动:

1. 在 `app` 目录下创建 `Models` 文件夹，将 `app/User.php` 移入 `app/Models` 文件夹下
2. 修改 `app/Models/User.php` 的命名空间为 `namespace App\Models;`
3. 全局搜索 `App\User`，并替换为 `App\Models\User`
