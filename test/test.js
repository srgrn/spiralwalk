var assert = require("assert")
var ex1 = require("../spiralwalk.js");




describe('ex1.spiral', function(){
  it("should return empty array for empty values",function(){
  	assert.deepEqual([],ex1.spiral(0,0,0,0));
  })
  it('should work fine on simple cases',function(){
  	assert.deepEqual([5,2,1,4,7,8,9,6,3],ex1.spiral(3,3,2,2));
  })
  it('will work when the walk is continuing outside of the matrix', function(){
      assert.deepEqual([2,1,5,6,7,3,8,4],ex1.spiral(2,4,1,2));
  })
})	
