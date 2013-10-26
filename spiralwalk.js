var ex1 = {
	spiral: function (n,m,y,x){
		var result = [];
		var matrix = this.buildMatrix(n,m);
		this.walk2(n,m,matrix,result,x-1,y-1);
		return result
	},
	matrix: []
}

ex1.buildMatrix = function (n,m){
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
ex1.walk2 = function (n,m,matrix,result,x,y){
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
module.exports = exports= ex1;