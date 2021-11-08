//conditional operator

const age = 12;
// equivalent to if ? = if, : = else
//age >= 16 ? console.log("You can drive!") : console.log("Wait more years");
// if(age >= 16){
//     console.log("You can drive");
// }else{
//     console.log("Wait longer");
// }
let canDrink;
    if (age >= 21){
        canDrink = "wine";
    } else{
        canDrink = "water";
    }
//console.log(canDrink);

//or
//console.log(`${age >= 21  ? 'wine' : 'water'}`);
/* Assignment A Conditionals improved: Original:
let tip;
const bill_value = parseInt(prompt("Please enter the final bill cost: "));
let total;
switch(true){
    case(bill_value >= 30 && bill_value <= 300):
        tip  = bill_value * .15;
        total = bill_value + tip;
        console.log(`The bill was ${bill_value}, the tip was ${tip}, `+
        `the total is ${total}`);
        break;
    case(bill_value <= 0):
        console.log("You entered an invalid amount.");
        break;
    default: {
        tip  = bill_value * .2;
        total = bill_value + tip;
        console.log(`The bill was ${bill_value}, the tip was ${tip}, `+
        `the total is ${total}`);
        break;
    }   
}*/
//const bill;
//let tip  = bill >= 30 && bill <= 300 ? bill *.15 : bill * .2;
//console.log(`The bill is ${tip}`);

//functions//
function show(){
    console.log("This is some text.")
};


function doubleTime(min){
    return min * 2;
}

function microwave(food, time, mode){
    //console.log(food, time, mode);
    timeNew = doubleTime(time);
    const readyToEat =  `Your ${food} will be heated for ${timeNew} minutes under ${mode} mode.`;
    return readyToEat;
   
};
const dinner = microwave("Pizza", 3, "Warm");
console.log(dinner);



// arrow function syntax// 

/*let birthYear;
const calAge = birthYear => 2021 - birthYear;
console.log(calAge(1996));*/




/*const yearUntilRetire = (birthYear, firstName) => {
    const age = 2021-birthYear;
    const retire = 65 - age;
    return (`${firstName} will retire in ${retire} years`);
};

console.log(yearUntilRetire(1996, "Steven"));*/

//function expression//

/*const calAge = function(birthYear){
    return 2021-birthYear;
}
const yearUntilRetire = function(birthYear, firstName){
    const age= calAge(birthYear);
    const retire = 65 - age;
        if(retire > 0){
            console.log
        }
        return retire;
        else {
            return -1;
        }
        return `${firstName} retires in ${retire} years`
        
}*/



// Back to the two  teams game, the Nets and the Knicks! 
// There is a new discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores 
// is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team.
//  Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as 
// parameters ('avgNets' and 'avgKnicks'), and then logs the winner to the console, 
// together with the victory points, according to the rule above. Example: "Knicks win 
// (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Nets score 44, 23 and 71. Knicks score 65, 54 and 49
// TEST DATA 2: Nets score 85, 54 and 41. Knicks score 23, 34 and 27

//classwork : const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;


    //return ave
    //return (`The average score is ${ave}`);
//let avgN = calcAverage(n1,n2,n3);
//let avgK = calcAverage(k1,k2,k3);

/* Class Act;
let avgN = calcAverage(85,54,41);
let avgK = calcAverage(23,34,27);
function checkWinner(avgNets, avgKnicks){

    if (avgNets >=  (avgKnicks*2)){
        return `Nets win (${avgNets} vs ${avgKnicks})`;
    }else if (avgKnicks >= (avgNets*2)){
        return `Knicks win (${avgKnicks} vs ${avgNets})`;
    }//else if (avgKnicks = avgNets){
       // return `There is a tie`;
    //}
    else{
        return ("Invalid parameters given/ Neither team wins");
    }

}
console.log(checkWinner(avgN, avgK));*/



// arrays //
const student1 = "Jay";
const student2 = "John";
const student3 = "Bob";

//const students = ["Jay", "John", "Bob"] OR
const students = new Array("John", "Jay", "Bob");
//const years = new Array(1991,1992,1996);
console.log(students);
//console.log(years[0]);
console.log(students.length);

//const john = ["John", 1996, "76 kg", 2021-1996, "students"];
const calAge = function(birthYear){
    return 2021- birthYear;
}
const years = [1990, 1991, 1994, 1992];
console.log(students.indexOf("John"));
//.includes(parameter) returns yes or no to see if its in list



//objects
const john = {
    firstName: "John",
    lastName: "Williams",
    //age:  2021 - 1996,
    birthYear: 1996,
    job: "student",
    friends:["Bob", "Jack","Peter"],
    calAge: function(){
        this.age = 2021-this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return ``
    }

}
console.log(john);
const johnArray =[
    "John",
    "Willaims",
    2021 - 1996,
    "student",
    ["Mike","Jack","Peter"]
]
john.address = ".....";
console.log(john.lastName);
console.log(john['firstName']);
john["instagram"]= "@john";
console.log(john.calAge());