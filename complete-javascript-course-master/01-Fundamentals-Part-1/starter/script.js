/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);

//practice assignment below

let country = "Canada";
let continent = 'North America';
let population = 38.01;


console.log(country);
console.log(continent);
console.log(population);



let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);


let age =30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas *2, ageJonas/10, 2 **3);
//2 ** 3 means 2 to the power of three 

const firstName = 'Jonas';
const lastName = 'Sman';

console.log(firstName + ' ' + lastName);

let x = 10+5;
x += 10;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now = 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah)/2

console.log(ageJonas, ageSarah, averageAge);




//DATA 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI>johnBMI;
console.log(markBMI, johnBMI,markHigherBMI);

//DATA 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / (markHeight2* markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2* johnHeight2);

const markHigherBMI2 = markBMI2>johnBMI2;
console.log(markHigherBMI2);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log("string with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


const age = 19;

if (age >= 18) {
  console.log(`Sarah can start driving license ????`)
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 1991;
let century;
if (birthYear <= 200) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//DATA 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is greater than John's (${johnBMI})!`)
} else if (markBMI < johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is less than John's (${johnBMI})!`)
} else {
  console.log(`Mark's BMI (${markBMI}) is the same as John's (${johnBMI})!`)
}

//type conversion
const inputYear = `1991`;
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));

//type conercison
console.log(`I am`);


//5 falsy values: 0, ``, undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 100;
if (money) {
  console.log(`Don't spend it all;`);
} else {
  console.log(`You should get a job!`);
}

const age = 18;
if (age === 18) console.log(`You just became an adult :D`);

const favouriteNumber = prompt(`Whats your favourite number?`);

console.log(favouriteNumber);
console.log(typeof favouriteNumber);


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
  console.log(`Dolphins win!!`);
} else if (dolphinsAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
  console.log(`Koalas win!!`);
} else if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log(`Its a tie!!`);
} else {
  console.log(`No winners!`);
}

const day = `monday`;

switch (day) {
  case `monday`: //strict compairison
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `tuesday`:
    console.log(`prepare theory videos`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples`);
    break;
  case `friday`:
    console.log(`record videos`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`enjoy the weekend`);
    break;
  default:
    console.log(`not a valid day`);
}

const age = 23;
age >= 18;
// ? console.log(`I like the drink wine`)
// : console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${drink2}`);


let bill = 275;
let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;

console.log(
  `The bill was ${bill}, the tip was ${
    (bill * tipPercentage) / 100
  }, and the total value was ${(bill * tipPercentage) / 100 + bill}.`
);
*/
