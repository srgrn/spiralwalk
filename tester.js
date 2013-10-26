#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-n, --rows <n>', 'The matrix n (rows) size')
  .option('-m, --columns <m>', 'the matrix m (columns) size')
  .option('-x <x>', 'Start x')
  .option('-y <y>', 'start y')
  .parse(process.argv);

var buildMatrix = function (n,m){
	arr = [];
	for (var i = 1; i <= n; i++) {
		var row = [];
		for(var j=1;j<=m;j++){
			row[j-1] = (i-1)*m + j;
		}
		arr[i-1] = row;
	};
	return arr;
};

var walk2 = function (n,m,matrix,result,x,y){
	var round =1;
	var target = n*m;
	var dx = 0;
	var dy = -1;
	if(x>=0 && y<n && y>=0 && x<m) result.push(matrix[y][x]);
	
	while(result.length < target)
	{
		var i =0;
		for(;i<round;i++){
			x+=dx;
			y+=dy;
			if(x>=0 && y<n && y>=0 && x<m) result.push(matrix[y][x]);
		}
		// change direction
		var temp = dx;
		dx = dy;
		dy = -temp;
		for(;i>0;i--){
			x+=dx;
			y+=dy;
			if(x>=0 && y<n && y>=0 && x<m) result.push(matrix[y][x]);
		}
		// change direction
		var temp = dx;
		dx = dy;
		dy = -temp;
		round++;
		
	}
	return result;
}



var result = [];
var matrix = buildMatrix(program.rows,program.columns);
walk2(program.rows,program.columns,matrix,result,program.X-1,program.Y-1);
console.log(result);

