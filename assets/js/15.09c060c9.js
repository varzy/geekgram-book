(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{219:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化"}},[s._v("#")]),s._v(" 项目初始化")]),s._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("使用 composer 创建一个全新的 Laravel 项目:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("composer create-project --prefer-dist laravel/laravel geekgram\n")])])]),a("h2",{attrs:{id:"初始化-git-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-git-仓库"}},[s._v("#")]),s._v(" 初始化 Git 仓库")]),s._v(" "),a("p",[s._v("首先在 "),a("code",[s._v(".gitignore")]),s._v(" 中添加一些必要的忽略:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".idea\n.php_cs.cache\n")])])]),a("p",[s._v("执行以下命令:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" geekgram\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"init"')]),s._v("\n")])])]),a("h2",{attrs:{id:"优化-editorconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化-editorconfig"}},[s._v("#")]),s._v(" 优化 .editorconfig")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\ninsert_final_newline = true\nindent_style = space\nindent_size = 4\ntrim_trailing_whitespace = true\n\n[*.md]\ntrim_trailing_whitespace = false\n\n[*.{yml,yaml}]\nindent_size = 2\n\n[*.{blade.php,html,js,ts,jsx,tsx,vue,css,sass,scss}]\nindent_size = 2\ntab_width = 2\n")])])]),a("h2",{attrs:{id:"使用-php-cs-fixer-自动格式化-php-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-php-cs-fixer-自动格式化-php-代码"}},[s._v("#")]),s._v(" 使用 php-cs-fixer 自动格式化 PHP 代码")]),s._v(" "),a("p",[s._v("通过 composer 安装 "),a("code",[s._v("php-cs-fixer")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("composer require --dev friendsofphp/php-cs-fixer\n")])])]),a("p",[s._v("在项目根目录添加 "),a("code",[s._v(".php_cs.dist")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$finder")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PhpCsFixer\\"),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("Finder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'vendor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'storage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("in")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__DIR__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" PhpCsFixer\\"),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'@Symfony'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'binary_operator_spaces'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对齐双箭头操作符")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'align_double_arrow'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不对齐赋值操作符")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'align_equals'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setFinder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$finder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),a("p",[s._v("在 "),a("code",[s._v("composer.json")]),s._v(" 中添加执行脚本:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"php-cs-fixer fix --diff --dry-run"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"php-cs-fixer fix"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"更新部分配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新部分配置项"}},[s._v("#")]),s._v(" 更新部分配置项")]),s._v(" "),a("p",[s._v("更新 "),a("code",[s._v("config/app.php")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# 更新时区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'timezone'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'PRC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# 更新语言")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'locale'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# 假数据填充的首选语言")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# <https:")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//github.com/fzaninotto/Faker#fakerproviderzh_cnpayment>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'faker_locale'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'zh_CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("更新 "),a("code",[s._v(".env")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("APP_NAME=Geekgram\n\n# 根据你的数据库信息进行填写\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=laravel\nDB_USERNAME=root\nDB_PASSWORD=\n")])])]),a("h2",{attrs:{id:"优化-model-文件的存储位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化-model-文件的存储位置"}},[s._v("#")]),s._v(" 优化 Model 文件的存储位置")]),s._v(" "),a("p",[s._v("在我们的项目中，要求所有的模型文件都存放到 "),a("code",[s._v("app/Models")]),s._v(" 文件夹下而非直接放入 "),a("code",[s._v("app")]),s._v(" 目录下。因此我们需要做如下改动:")]),s._v(" "),a("ol",[a("li",[s._v("在 "),a("code",[s._v("app")]),s._v(" 目录下创建 "),a("code",[s._v("Models")]),s._v(" 文件夹，将 "),a("code",[s._v("app/User.php")]),s._v(" 移入 "),a("code",[s._v("app/Models")]),s._v(" 文件夹下")]),s._v(" "),a("li",[s._v("修改 "),a("code",[s._v("app/Models/User.php")]),s._v(" 的命名空间为 "),a("code",[s._v("namespace App\\Models;")])]),s._v(" "),a("li",[s._v("全局搜索 "),a("code",[s._v("App\\User")]),s._v("，并替换为 "),a("code",[s._v("App\\Models\\User")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);