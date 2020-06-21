/**********
* variables and data types
*/
/*
var firstName = 'Deepak';   //string
console.log(firstName);
 
var lastName = 'Kumar';         //strings
var age = 23;                    // Number
 
var fullAge = true;            // Boolean
console.log(fullAge);
 
var job ;                     //undefined
    job = 'Teacher';             // after assigning number it became string
console.log(job);
 
var $3years = 3;
var johnMark = 'Deepak and Mark';
*/
 
//single line comments
 
/*******
* multiple line comments
*/
 
/***********************
* Variables mutation and type coercion
*/
/*
// Type Coercion
var firstName = 'Deepak';
var age = 22;
 
console.log(firstName +' ' +age);       // here everything converted in strings and this process is called Type Coersion
 
var job, isMarried;
job = 'teacher';
isMarried = false;
 
console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);
 
// Variable mutation
age = 'twenty two';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);
 
var lastName = prompt('What is his last Name?');
console.log(firstName + ' '+ lastName);
*/
 
/********************
* Basic operators
*/
/*
  var now , yearDeepak , yeahMark;
  now = 2019;
  ageDeepak = 22;
  ageMark = 33;
 
  //Math Operators
  yearDeepak = now - ageDeepak;
  yeahMark = now - ageMark;
 
  console.log(yearDeepak);
 
  console.log(now + 2);
  console.log(now * 2);
  console.log(now / 2);
 
  //Logical operators
  var deepakOlder = ageDeepak < ageMark;
  console.log(deepakOlder);
 
  console.log(typeof deepakOlder);
  console.log(typeof 'Mark is older than John') ;
  var count;
  console.log(typeof count);
 
*/
 
/*******************************
* Operator precedence
*/
/*
var now = 2018;
var yearDeepak = 1989;
var fullAge = 18;
var isFullage = now - yearDeepak >= fullAge;
console.log(isFullage);
 
*/
/********************
* Coding Challenge - 1
*/
/*
var markMass = 78; //kg
var markHeight = 1.69 ; //meters
 
var johnMass = 92;  //kg
var johnHeight = 1.95 ; //meters
 
var markBmi = markMass / (markHeight * markHeight);
var johnBMI = johnMass /(johnHeight * johnHeight);
if(markBmi > johnBMI)
{
    console.log('Mark\'s BMI is higher than John\'s.');
} else{
    console.log('John\'s BMI is higher than Mark\'s.');
}
 
//  var BMI = (markBmi > johnBMI);
//  console.log("Is Mark\'s BMI higher than john\'s?" + BMI);   //putting backslash with 's is called escaping
 
*/
/*****************************
* if / else Statements
*/
/*
var firstName = 'Deepak';
var civilStatus = 'single';
 
if(civilStatus === 'married'){
     console.log(firstName + ' is married');
} else{
     console.log(firstName + ' will hopefully marry soon:)');
}
*/
/*****************
* Boolean
*/
/*
var firstName = "Deepak";
var age = 20;
if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {// Between 13 and 20
   console.log(firstName + " is a teenager.");
} else if(age >= 20 && age <30){
   console.log(firstName + ' is a young man.');
}else {
  console.log(firstName + " is a man.");
}
*/
 
/********************
* The ternary Operator and switch statements
*/
/*
var firstName ='Deepak';
var age = 22;
// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
 
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
 
// Switch Operator
var job = 'Student';
switch(job){
  case'Teacher':
   console.log(firstName + ' is a '+ job );
   break;
   case'Driver':
   console.log(firstName + ' is a '+ job );
   break;
   case'Engineer':
   console.log(firstName + ' is a '+ job );
   break;
   default:
      console.log(firstName + ' is a '+ job );
 
}
age = 38;
switch(true){
  case age < 13:
  console.log(firstName + ' is a boy.');
  break;
  case age >= 13 && age < 20:
      console.log(firstName + ' is a teenager.');
      break;
      case age >= 20 && age <30 :
          console.log(firstName + ' is a Young Man.');
          break;
          default:
              console.log(firstName + ' is a MAN.');
}
/****************
* Truthy and falsy Values and equality operators
*/
// falsy values: undefined,null,0,'',NaN   -- these are the values when we used in conditional operator it becomes false its acually dont have false value but after uses of it in conditional operator it became false.
//Truthy Values: NOT falsy Values consider as Truthy values.
/*
var height = NaN ;
 
if(height || height === 0){
  console.log('Variable is defined' );
}else{
  console.log('Variable has NOT been defined '+height);
}
*/
/******************************
* Coding Challenge 2
*/
/*
var john1stScore = 110;
var john2ndScore = 120;
var john3rdScore = 180;
var johnAvgScore = (john1stScore + john2ndScore + john3rdScore) / 3;
 
var mark1stScore = 120;
var mark2ndScore = 120;
var mark3rdScore = 180;
var markAvgScore = (mark1stScore + mark2ndScore + mark3rdScore) / 3;
 
var marry1stScore = 300;
var marry2ndScore = 100;
var marry3rdScore = 100;
var marryAvgScore = (marry1stScore + marry2ndScore + marry3rdScore) / 3;
console.log(johnAvgScore, markAvgScore, marryAvgScore);
switch (true) {
  case johnAvgScore > markAvgScore && johnAvgScore > marryAvgScore:
    console.log(
      "John is winner and their avg hioghest score is : " + johnAvgScore
    );
    break;
  case markAvgScore > johnAvgScore && markAvgScore > marryAvgScore:
    console.log("Mark is winner and their avg highest is : " + markAvgScore);
    break;
  case markAvgScore < marryAvgScore && johnAvgScore < marryAvgScore:
    console.log(
      "Marry is a winner and their avg Highest Score is :" + marryAvgScore
    );
    break;
  default:
    console.log("Match is draw their is different winner");
}
*/
/****************
* Function
*/
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var DeepakAge = calculateAge(1996);
var JohnAge = calculateAge(1995);
var MarkAge = calculateAge(1994);
console.log(DeepakAge, JohnAge, MarkAge);
 
function yearsUntilRetirement(year, _firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
if(retirement > 0) {   
  console.log(_firstName + " retires in " + retirement + " years.");
}else {
  console.log(_firstName + ' is already retired.')
}
}
yearsUntilRetirement(1996, "Deepak");
yearsUntilRetirement(1995, "john");
yearsUntilRetirement(1994, "Mark");
*/
/******  Function Statements and Expressions *******/
 
//function by using function declaration
//function whatDoYouDo(job, firstName) {}
 
//Function by Function Expression
/*
var whatDoYouDo = function(job,firstName){
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code '; // there is no need of putting break after return keyword because return  gave value to caling function
      case 'driver':
        return firstName + ' drives a cab in Lisbon.';
        case 'designer':
          return firstName + ' designs beautiful websites';
          default:
            return firstName + ' does something else';
  }
}
console.log(whatDoYouDo('teacher','john'));
console.log(whatDoYouDo('driver','john'));
console.log(whatDoYouDo('designer','john'));
console.log(whatDoYouDo('Engineer','Merry'));
*/
/********** Arrays   ********/
 
/******Coding Challenge 4 ******** */
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]) , tipCalculator(bills[2])];
var finalvalues = [bills[0] + tips[0], bills[1] + tips[1] , bills[2]+tips[2]];
console.log(tips,finalvalues);
*/
// here we create object with help of object Literal
/*
var deepak = {
  firstName: 'Deepak',
  lastName: 'Rajput',
  birthYear: 1995,
  family: ['jane','Mark', 'Bob' , 'Enily'],
  job: 'Developer',
  isMarried : false
};
// in this away we can retrive data from object
console.log(deepak);
console.log(deepak.firstName);
console.log(deepak['lastName']);
var x = 'birthYear' ;
console.log(deepak[x]);
 
// how to mutate data in existing object element
deepak.job='Teacher';
deepak['isMarried'] = true ;
console.log(deepak);
 
// Now here we are going to create object with the help of new object.
 
var jane = new Object();
jane.firstName = 'jane';
jane.lastName = 'Smith';
jane['birthYear'] = 1990;
 
console.log(jane);
*/
 
/****** Objects and Methods *******/
/*
var john = {
  firstName: 'John',
  lastName:'Smith',
  birthYear: 1994,
  family:['jane','Mark', 'Bob'],
  job:'teacher',
  isMarried: false,
  calcAge : function(){         // expression function
    this.age = 2019 - this.birthYear;
 
  }
 
};
 
//john.age = john.calcAge(); // instead of writing this we can put this inside function with the help of this keyword
 
john.calcAge();
console.log(john);
 
var markMass = 78; //kg
var markHeight = 1.69 ; //meters
 
var johnMass = 92;  //kg
var johnHeight = 1.95 ; //meters */
/****** Coding Challenge - 4 ******/
/*
var John = {
  fullName: 'John Smith',
  massOfJohn: 92,
  heightOfJohn: 1.95,
  johnBmi: function(){
    var BMI = this.massOfJohn / (this.heightOfJohn * this.heightOfJohn);
    this.BMI = BMI;
    return this.BMI;
  }
}
 
var Mark = {
  fullName: 'Mark Smith',
  massOfMark: 78,
  heightOfMark: 1.69,
  markBmi: function(){
    var BMI = this.massOfMark / (this.heightOfMark * this.heightOfMark);
    this.BMI = BMI;
   return this.BMI;
  }
}
John.johnBmi();
Mark.markBmi();
console.log(John , Mark);
 
if(John.johnBmi() > Mark.markBmi()){     // or we can call metod here if(John.johnbmi() > Mark.marBmi ){ }
  console.log( John.fullName + ' has a higher BMI' );
}else if  (John.BMI < Mark.BMI) {
  console.log(Mark.fullName + ' has a higher BMI' );
}else{
  console.log('Both Have Same BMI');
}
*/
/********** Coding Challenge - 5 **********/


/********** Arrays ***********/
/* 
var names = ['Deepak','John','Mark'];
 var years = new Array(1995,1994,1993);

 console.log(names);
 console.log(names.length);
 console.log(names[0] , names[2]);
  
 // Mutate Array Data

 names[1] = 'Shivesh';
 names[names.length] = 'Aditya';
 console.log(names);

 // Different data types
 var john = ['john', 'Smith', 1996 , 'designer', 'false'];

 john.push('blue');             //PUSh -  will add element in array as last element .
 john.unshift('Mr.')               //Unshift - It will insert at the start of an Array.
 console.log(john);

 john.pop();                     // it will remove the last element from an array
 john.shift();                    // Shift - It will removes first elements from an Array 
 console.log(john);

 console.log(john.indexOf(1996));  // It will returns the  value of first occurences of position


 var isDesigner = john.indexOf('designer') === -1 ? 'john is not designer' : 'john is a designer ';
 console.log(isDesigner);
 */
 
 /*************** Coding Challenges-3 *****************/
/*
 var johnAndFamilyBill = [ 124 , 48 , 268 ];
 var Bill_Tip = [];
 var BetierTip;
 var i;
 for(i=0; i < (johnAndFamilyBill.length) ; i++){
     if( johnAndFamilyBill[i] <= 50)
     {
        Bill_Tip[0] = johnAndFamilyBill[i] * 0.2;
        
     }
     else if(johnAndFamilyBill >= 50 || johnAndFamilyBill <= 200){
        Bill_Tip[1]  = johnAndFamilyBill[i] * 0.15;
        
     }
     else if(johnAndFamilyBill >= 200 ){
        Bill_Tip[2] = johnAndFamilyBill * 0.10;
        
     }

 }
 console.log(johnAndFamilyBill);
 console.log(Bill_Tip[0] , Bill_Tip[1] , Bill_Tip[2]);
**/
  /*******Lecture: Hoisting */

// Function 
  CalculateAge(1965);

  function CalculateAge(year){   // this is function Declaration type function
    console.log(2016 - year);

  }
  
  //retirement(1990); // its giving error that retirement is not function
  var retirement = function (year){ // this is function expression type function 
          console.log(65 - (2016-year));
  }
  // so hoisting only works with function declration not work with function expression.
    

// Variables

console.log(age); // it will gave undefined because of hoisting
var age = 23;         //  this variable is created Golbal execution context object
//console.log(age);

function foo(){
  console.log(age);  // Answer = Undefined
  var age = 65;      
  console.log(age);     // Answer = 65
}
foo();
console.log(age);  // Answer = 23

/************* Scoping in JavaScript */
var a = "Hello!";
first ();

function first() {
  var b = 'Hi!';
  second();

  function second(){
    var c = 'Hey!';
    //console.log(a + b + c);
    third();
  }
}
function third(){
  var d = 'john';
  //console.log(c);
  console.log(a+d);
}
