/*
every number is considered a float
dynamic typing is a value automatically assigned to a number
*/
/*const 
y= x = 3 / 2 -1;

let plate === "pizza";
console.log(plate, x, y, 3/2 , "This is text " + plate)
console.log("This is text ${3/2} this is some other texts ")
You give program the logic, let the program handle the actual calculations
(Taking Decisions)
- Else/If Blocks*/
//Create a temperature conversion


/*let temp1 = celsius + " \u00B0 C is " + fahrenheit + " \u00B0 F";
celsius= (fahrenheit *(9/5)) + 32;
let temp2 = fahrenheit + " \u00B0 F is " + celsius + " \u00B0 C";

let celcius = 20;

let fahrenheit = (celcius * 9/5 + 32);

console.log(celcius + " degree celcius is " + fahrenheit + " degrees fahrenheit");
*/


/*let celsius = 32;
let fahrenheit = (celsius-32)/ (5/9);
console.log(`${celcius} degree celcius is ${fahrenheit} degrees fahrenheit`);

fahrenheit = 50;
celsius = (fahrenheit - 32)* (5/9);
console.log(celcius + " degree celcius is " + fahrenheit + " degrees fahrenheit");
*/
/*const isAdult= false;
if (isAdult){
    console.log("You can drive");
}
else{
    console.log("Wait a couple of years.");
}*/


/*let age = 12;
if(age >= 16){
    console.log("You can drive!")
}else{
    const yearLeft= 16 - age;
    console.log('Wait ${yearLeft} years left')
}

birthYear = 1996;
let century;
    if(birthYear < 2000){
        century = 20;
    }
    else{
        century =21;
    }*/

// let lucas_height; 
// let lucas_weight;
// let lucas_BMI;

// let john_height; 
// let john_weight;
// let john_BMI;

// lucas_height = 1.88;
// lucas_weight = 95;
// lucas_BMI = lucas_weight/ (lucas_height ** 2);
// john_height = 1.76;
// john_weight = 85;
// john_BMI =  john_weight/(john_height**2);
// if(lucas_BMI > john_BMI){
//  //   console.log("Lucas BMI is higher than John's")
// }else{
//    // console.log("Johns BMI is higher than Lucas")
// }
// // type conversion

//truthsies and falsies
//FALSIES:
//0, 
//"  ", 
// //undefined//no assigned value, 
// //null, 
// //NaN;
// console.log(Boolean(0));
//console.log(Boolean(undefined));
//console.log(Boolean("John"));
//console.log(Boolean({}));//empty value won't execute
//console.log(Boolean(" "));


// const num = 0;
// if ("John"){
//     console.log("good")
// }
// else{
//     console.log("job")
// }
// let age;
// if (age){
//     console.log("Job 1")
// }
// else{
//     console.log("Job2")
// }
//control + / is mass comment


//const age = 18;
//if (age === 18) console.log("You're an adult")// only works without {} when theres only one line of code
//if (age == 18) console.log("Still adult")//lose you can compar whatever
//prompt("Guess the number");

//creates a popup for input

//const userInput = prompt("Guesss the number");
//console.log(userInput);
// const userInput = prompt("Guess the number");
// console.log(userInput);
// console.log(typeof userInput);
// if(userInput === 10){
//     console.log("Number Matched!");
// }else if (userInput === 8){
//     console.log("8 is also matched");
// }else {
//     console.log("Not Matched!");
// }

// if(userInput !== 12){
//     console.log("why not 8");
// }// double = is strict, single equal is lose
// if (userInput != 12){
//     console.log("Valid")
// }
// // && is and || is or ! is not


const driverLicense = true;
const goodVision = false;
const notDrunk = true;
console.log(driverLicense && goodVision);
console.log(driverLicense || goodVision);
console.log(!driverLicense);
console.log(!goodVision);
if(driverLicense && goodVision && notDrunk){
    console.log("You can drive")
}else if (driverLicense && goodVision){
   console.log("You would have qualified if you weren't drunk")
}
else {
    console.log("You can't drive")
}




// class challenge averages


// There are two teams, Nets and Knicks.They compete against each other 3 times.
// The team with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console.Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.Hint: Use a logical operator to test for minimum
// score, as well as multiple else -if blocks.
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points.Otherwise, no team wins the trophy
// Test data:
// § Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110

// § Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
// § Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106

let netsAverage = (96+108+89)/ 3;
let knicksAverage = (99+91+110) / 3;
if (netsAverage > knicksAverage){
    console.log("Nets win the trophy with a score of " + netsAverage + " average.")
} else if (knicksAverage > netsAverage){
    console.log("Knicks win the trophy with a score of " + knicksAverage + " average")
}else if (netsAverage === knicksAverage){
    console.log("Neither team wins a trophy, they have tied.")
}
