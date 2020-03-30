# 起手

## 创建项目

```bash
composer create-project --prefer-dist laravel/laravel geekgram
```

## 初始化 Git 仓库

```bash
git init && git add . && git commit -m "init"
```

## 代码格式化

### editorconfig

编辑 `.editorconfig`

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
tab_width = 2
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[*.{php,py}]
indent_size = 4
tab_width = 4

[*.blade.php]
indent_size = 2
tab_width = 2
```

### php-cs-fixer

```bash
composer global require friendsofphp/php-cs-fixer
```

在项目根目录添加 `.php_cs.dist`

```php
<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude('node_modules')
    ->exclude('vendor')
    ->in(__DIR__)
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony' => true,
        'binary_operator_spaces' => ['default' => 'align_single_space']
    ])
    ->setFinder($finder)
;
```

在 `composer.json` 添加 composer script

```bash
"scripts": {
  "lint": "php-cs-fixer fix --diff --dry-run",
  "fix": "php-cs-fixer fix"
}
```

### Prettier

```bash
npm i -D prettier
```

在根目录添加 `.prettier.js`

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

## 修改 .gitignore

在 `.gitignore` 中添加以下配置

```
.idea
.php_cs.cache
```
