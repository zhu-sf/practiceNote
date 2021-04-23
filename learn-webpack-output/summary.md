1. webpack 打包主流程以及和动态加载情况下输出代码，总结如下
总体的文件就是一个 IIFE——立即执行函数
webpack 会对加载过的文件进行缓存，从而优化性能
主要是通过 __webpack_require__ 来模拟 import 一个模块，并在最后返回模块 export 的变量
webpack 是如何支持 ES Module 的
动态加载 import() 的实现主要是使用 JSONP 动态加载模块，并通过 webpackJsonpCallback 判断加载的结果