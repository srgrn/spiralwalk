var ex = require("./spiralwalk.js");
var n = 2;
var m = 4;
var arr = ex.buildMatrix(n,m);
var result = [];
ex.walk2(n,m,arr,result,0,1);
console.log(result);