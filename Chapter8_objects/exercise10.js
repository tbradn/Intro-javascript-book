[1, 2, ["a", ["b", false]], null, {}]

/*There are 6 primitive values and 4 objects:

Primitive Values	Objects
1	[1, 2, ["a", ["b", false]], null, {}]
2	["a", ["b", false]]
"a"	["b", false]
"b"	{}
false	
null	
The outermost set of brackets defines an array (an object) that contains 5 elements. 
The elements with values 1, 2, and null are all primitive values, while ["a", ["b", false]] is a nested array, and {} is nested object. 
The nested array has 2 elements, one of which is a primitive value ("a"), while the other is yet another nested array. 
Finally, this innermost array contains two elements, "b" and false, both of which are primitive values.*/
