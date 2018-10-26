// Assignment operator =
var var_one="Wlcome to JS world";
console.log(var_one);

// Arithmetic operators + - * /
var a=100;
var b=200;
var sum=a+b;
var sub=a-b;
console.log("Addition of:"+a+','+b+'is:'+sum);
console.log("subtraction is:"+sub);


// Short hand math += , -= , *= , /=
var num1=10;
var num2=20;
var add=0;
add=add+(num1+num2);
add +=num1+num2;
console.log('the add value is:'+add);


// Conditional operators < , > , <= , >= , !=
var age=25;
if(age<18)
{
    console.log('you are minor');
}
else {
    console.log('you are major');
}


// Unary Operator ++ , -- (pre , post)
var i=10;
i=i+1;
i+=1;
i++;
console.log('i value is'+i);


// Logical operators AND , OR
// var irelation=true;
// var paretsAgreed=false;
// if(inrelation && paretsAgreed)
// {
//     console.log('get marry soon');
// }
// else
// {
//     console.log('Wair untill parents Agreed');
// }


// String Concatenation Operator
var str=10+20+"10"+20+20;
console.log(str);


// Ternary operator (? :)
(age>18)? console.log("you are major"):console.log("you are major");


// Type of operator
var abc;
abc=10;
abc=true;
abc='test';
abe=null;
console.log('value is' +abc+ ' ' +'type is' +typeof abc);

// == operator
var x=10;
var y="20";
if(x==y){
    console.log('both are equal')
}
else{
    console.log("both are not equal");
}


// === operator
var x=10;
var y="20";
if(x===y){
    console.log('both are equal')
}
else{
    console.log("both are not equal");
}
