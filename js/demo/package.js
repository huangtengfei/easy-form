/*
 angular.module('MyApp',[...])会创建一个新的Angular模块，然后把方括号（[...]）中的依赖列表加载进来；
 而angular.module('MyApp')会使用由第一个调用定义的现有的模块.
 所以，对于以下代码，你需要保证在整个应用中只会使用一次.
 */

angular.module("ef.demo", []);
