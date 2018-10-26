//create an object in javascript
var employee={};

//add properties of an object
employee.name='john';
employee.age=40;
employee.designation='Manager';

//access an object
console.log(employee);

//access the properties of an object
console.log('Name:'+employee.name);



//create a nested object
var student={
    name:'chandu',
    age:20,
    course:'engg',
    address:{
        city:'nanded',
        state:'maharastra',
        country:'India'
    }
};

//access the nested onject
console.log(student.address);

//add a property to nested object
student.address.street='Anand Nager';
console.log(student.address);

//access the nested object properties using dot,[]
console.log(student.address.stree); // Anand Nagar
console.log(student.address['street']); //Anand Nagar

//=== operator for object
var obj1={
    name:'kishor',
    age:23
};

var obj2=obj1;
if(obj1===obj2){
    console.log('both are equal');
}
else {
    console.log('both are not equal');
}

//creation of objects , adding properties ,  retrieval

//declaring Object Literals

//Access existing properties

//Access Non Existing Properties

// Usage of Dot and [] notations

// use of [] notation where dot is not used for invalid identifiers

// use of [] notation for accessing dynamic properties

// nested Objects creation

//Accessing them using dot notation

//Accessing them using mix of dot and [] notation

// Add some properties to nested object and access them

// === operator demo for objects (if pointing to same location in memory)

// deleting a property from an object

