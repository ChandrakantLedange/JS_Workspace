// If Else condition Example
var courseCompleted=true;
var practiceCompleted=true;
if(courseCompleted && practiceCompleted){
    console.log('You will get the job soon...');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Please start the practicing');
}
else{
    console.log('plz join once again course');
}

// For loop Example to display from 1 - 10 values
var output='';
for(var i=1;i<=10;i++){
    if(i<=9) {
        output += i + ",";
    }
    else {
        output +=i;
    }
}
console.log(output);
document.querySelector('#display').textContent=output;


// While loop Example to display from 1 - 10 values
var result='';
//initialization
 i=1;
//condition
while(i<=10)
{ //statemets
    if(i<=9){
        result += i + "_";
    }
    else {
        result +=i;
    }
    //incre/decre
    i++;
}
console.log(result);
document.querySelector('#display').textContent=result;


// Do while loop Example to display from 1 - 10 values
result='';
i=1;
do{
    //statements
    if(i<=9){
        result += i + "*";
    }
    else {
        result +=i;
    }
    //increment/decrement
    i++;
}
while (i<=10);
console.log(result);
document.querySelector('#display').textContent=result;


// Switch Statement Example
var today=new Date().getDay();
output='Today is:';
switch (today){
    case 0:
        output +='Sunday';
        break;
    case 1:
        output +='Monday';
        break;
    case 2:
        output +='Tuesday';
        break;
    case 3:
        output +='Wednesday';
        break;
    case 4:
        output +='Thursday';
        break;
    case 5:
        output +='Friday';
        break;
    case 6:
        output +='Saturday';
        break;
    default:
        output +='';
        break;
}
console.log(output);
document.querySelector('#display').textContent=output;

//print the numberesString
var numStr="012345";
var tempStr='';
for(var i=0; i<numStr.length;i++){
    var ch=
}
