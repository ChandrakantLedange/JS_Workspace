// creation of arrays
var array=[10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log(array[0]);  //10
console.log(array[4]);  //50



// Access not existed property from an array
console.log(array[100]);   //undefined


// adding properties to an array
array[5]=60;
console.log(array);


// Accessing length of an Array

var length=array.length;
console.log('The length is:' +length);

// reverse the array using reverse()
array=[10,20,30,40,50];
console.log('Before:'+array);
array.reverse();
console.log('After:'+array);



// Remove the first value of the array: shift()
array=[10,20,30,40,50];
console.log('Before:'+array);
array.shift();  //first value will be delete.
console.log('After:'+array);

// Add value to front of the array:unshift()
array=[10,20,30,40,50];
console.log('Before:'+array);
array.unshift(100); //add a new value infront of first position
console.log('After:'+array);

// Remove the last value of the array: pop()
array=[10,20,30,40,50];
console.log('Before:'+array);
array.pop();
console.log('After:'+array);

// Add value the end of the array: push()
array=[10,20,30,40,50];
console.log('Before:'+array);
array.push(100);
console.log('After:'+array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
//array.splice(index)
array=[10,20,30,40,50];
console.log('Before:'+array);
array.splice(1);  //removes all the values from the index '1'
console.log('After:'+array);

//array.splice(index,n)
array=[10,20,30,40,50];
console.log('Before:'+array);
array.splice(1,2);   //removes 20,30
console.log('After:'+array);

//array.splice(index,1,replace)
array=[10,20,30,40,50];
console.log('Before:'+array);
array.splice(3,1,80);  //80 replace with 40.
console.log('After:'+array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1=['HTML','CSS','JAVASCRIPT','BOOTSTRAP'];
var array2=array1;   //both are pointing to same object
array1.splice(1);    //Remain HTML rest of delete.
console.log(array2);

array1=['HTML','CSS','JAVASCRIPT','BOOTSTRAP'];
array2=array1.slice();    //create a new copy of an array.
array1.splice(1);
console.log(array2);

// indexOf()
array=['HTML','CSS','JAVASCRIPT','BOOTSTRAP'];
var index=array.indexOf('BOOTSTRAP');
console.log('index :' +index);

//if value is not exit value wil get -1
array1=['HTML','CSS','JAVASCRIPT','BOOTSTRAP'];
var value='Python';
if(array.indexOf(value)===-1){
    console.log('the value is not exit');
}
else {
    console.log('the value is exist @ index:' +array.indexOf(value));
}
// Join()
array=[10,20,30,40,50];
var str=array.join('*');
console.log(str);

array1=['HTML','CSS','JAVASCRIPT','BOOTSTRAP'];


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
