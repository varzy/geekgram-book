(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{224:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"项目优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[s._v("#")]),s._v(" 项目优化")]),s._v(" "),e("h2",{attrs:{id:"更新部分配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新部分配置项"}},[s._v("#")]),s._v(" 更新部分配置项")]),s._v(" "),e("p",[s._v("更新 "),e("code",[s._v("config/app.php")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# 更新时区")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'timezone'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'PRC'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# 更新语言")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'locale'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'zh-CN'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# 假数据填充的首选语言")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("# <https:")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//github.com/fzaninotto/Faker#fakerproviderzh_cnpayment>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'faker_locale'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'zh_CN'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),e("p",[s._v("更新 "),e("code",[s._v(".env")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("APP_NAME=Geekgram\n\n# 根据你的数据库信息进行填写\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=laravel\nDB_USERNAME=root\nDB_PASSWORD=\n")])])]),e("h2",{attrs:{id:"优化-model-文件的存储位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化-model-文件的存储位置"}},[s._v("#")]),s._v(" 优化 Model 文件的存储位置")]),s._v(" "),e("p",[s._v("在我们的项目中，要求所有的模型文件都存放到 "),e("code",[s._v("app/Models")]),s._v(" 文件夹下而非直接放入 "),e("code",[s._v("app")]),s._v(" 目录下。因此我们需要做如下改动:")]),s._v(" "),e("ol",[e("li",[s._v("在 "),e("code",[s._v("app")]),s._v(" 目录下创建 "),e("code",[s._v("Models")]),s._v(" 文件夹，将 "),e("code",[s._v("app/User.php")]),s._v(" 移入 "),e("code",[s._v("app/Models")]),s._v(" 文件夹下")]),s._v(" "),e("li",[s._v("修改 "),e("code",[s._v("app/Models/User.php")]),s._v(" 的命名空间为 "),e("code",[s._v("namespace App\\Models;")])]),s._v(" "),e("li",[s._v("全局搜索 "),e("code",[s._v("App\\User")]),s._v("，并替换为 "),e("code",[s._v("App\\Models\\User")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);