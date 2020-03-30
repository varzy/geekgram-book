# 项目初始化

**注意**

* 管理后台项目都将使用 Yarn 作为前端的包管理工具。你亦可以使用 Npm，但需要自行调整命令行语法
* 该项目将使用 Typescript 编写 Vue 以外的逻辑代码，而 Vue 组件内部将仍然使用 JS 语法。这是由于 Vue2.x 对 TS 的支持并非完美，并且使用 TS 语法编写组件的语法几乎与官方文档完全不一致
* 你仍然可以选择使用 Typescript 编写 Vue 组件。详见 [@vue/cli-plugin-typescript](https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md)

## 创建项目

首先全局安装 `@vue/cli`:

```bash
yarn global add @vue/cli
```

接着执行下面的命令创建项目:

```bash
vue create geekgram-admin
```

接着命令窗口会要求我们交互式地设置新项目:

我们选择 `Manually select features`。

![](~@assets/init-vue.png)

接着通过空格键勾选自己需要的功能:

![](~@assets/init-vue-features.png)

选择完毕后，按下回车:

## 尝试运行项目

```bash
yarn serve
```

在浏览器中打开 `http://localhost:8080`，就应该能看到 Vue 的初始页面了。
