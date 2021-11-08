//John Object

const John = {
    firstName: "John",
    lastName: "Williams",
    birthYear: 1996,
    job: "student",
    friends: ["Mike", "Jack", "Peter"],
    
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    
    getSummary: function (){
        return `${this.firstName} is ${this.calAge()} years old, and he has ${this.age >= 18? this.license="a":this.license = "no"} driver's license` 
    }
}
console.log(`${John.firstName} has ${John.friends.length} friends, and his best friends are called ${John.friends[0]}`)
//console.log(John.calAge)
console.log(John.getSummary());





// Let's go back to Lucas and John comparing their BMIs! This time, let's use objects 
// to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). 
// (mass in kg and height in meter)
 
// 1. For each of them, create an object with properties for their full name, mass, and height 
// (Lucas Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
//  Store the BMI value to a property, and also return it from the method.

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
// Example: "John Smith's BMI (28.3) is higher than Lucas Miller's (23.9)!"
 
// TEST DATA: Lucas weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const Lucas = {
    firstName: "Lucas",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.BMI = this.mass/(this.height**2);
        return this.BMI;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.BMI = this.mass/(this.height**2);
        return this.BMI;
    }
}
console.log(john.calcBMI());

if (Lucas.calcBMI() > john.calcBMI()){
    console.log(`${Lucas.firstName} ${Lucas.lastName}'s BMI (${Lucas.calcBMI()}) is higher than 
    ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()})`);
}else if (john.calcBMI() > Lucas.calcBMI()){
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI}) is higher than 
    ${Lucas.firstName} ${Lucas.lastName}'s BMI (${Lucas.calcBMI})`);
}else{
    console.log(`Both Lucas and John have the same BMI of ${Lucas.calcBMI}`);
}


const john1 = [
    "John", 
    "Williams",
    2021 - 1996,
    "student",
    ["Mike", "Jack", "Peter"],
    true
]
/*
for (let rep = 1; rep <= 8; rep++){
    console.log(`Breakfast option for soymilk ${rep}`)
}


for (let i = 0; i < john1.length; i++){
    const types = [];
    console.log(john1[i]);
    
    types.push(typeof john[i]);
    console.log(types);
}*/
const years = [1991, 2006, 1969, 2001];
const ages=[];
for (let i = 0; i < years.length; i++){
    ages.push(2021-years[i])
}
console.log(ages);
for (let i = 0; i < john1.length; i++){
    if(typeof john[i]== `string`) continue;
}
/*loop backwards
for (let i = john1.length; i > 0; i--){
    if(typeof john[i], typeof john[i]);
}*/
let dice = Math.trunc(Math.random()*6)+1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random()*6)+1;//does it again
    if (dice === 6) console.log(`You got a 6! Loop ends`);
}


// Let's improve the tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before(no need to repeat) to 
// calculate tips and total values(bill + tip) for every bill value in 
// the bills array.Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add 
// values to the tips and totals arrays 
// 4. BONUS: Write a function 'calcAverage' which takes an array called 
// 'arr' as an argument. This function calculates the average of all
// numbers in the given array. 


const calcTip = function (bill){
    return bill >= 30 && bill <= 300 ? bill * .15: bill *.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++){
    tips.push(bills[i].calcTip);
    totals.push(bills[i].calcTip + bills[i])
}
console.log(tips);
console.log(totals);
const calcAverage = function (arr){
    let sum = 0;
    //for(){
//
  //  }
    //sum +=
}






//This is actual javascript



