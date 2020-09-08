/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 35;
if (votingAge > 18) {
    console.log('true');
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let varA = 'variable a';
let varB = 'variable b';

if (varA !== varB) {
    varA = varB;
    console.log('varB assigned to varA: ' + varA);
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log('Converted string to number: ' + Number('1999'));



//Task d: Write a function to multiply a*b 
function multiply(a,b) {
    return a*b;
}
console.log('Regular Function: ' + multiply(2,5));

let multiplyArrow = (a,b) => a * b;
console.log('Arrow Function: ' + multiplyArrow(5,2));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function toDogYears(age) {
    return age * 7;
}
console.log('35 to dog years: ' + toDogYears(35));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFoodCalculator(weight, age) {
    if (age < .4 ) {
    return weight * .1;
    } else if ((age > .4 && age < .7)) {
        return weight * .05;
    } else if ((age > .7 && age < 1)) {
        return weight * .04;
    } else {
        if (weight < 5) {
            return weight * .05;
        } else if (weight >= 6 && weight <= 10) {
            return weight * .04;
        } else if (weight >= 11 && weight <=15) {
            return weight * .03;
        } else {
            return weight * .02;
        }
    }
}
console.log(dogFoodCalculator(15, 1));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


/*Function to choose a number for AI between the minimum and maximum number given.
It is inclusive, so it will include the lowest and highest value provided in the return.*/
function aiChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rockPaperScissors(playerChoice) {
    /*Let ai choice be between 1 and 3. Result of 1 = rock, 2 = scissors, 3 = paper.*/
    let ai = aiChoice(1,3);

    switch (playerChoice)  {
        case 'rock':
            if (ai === 1) {
                console.log('Tie. Player: rock - AI: rock. Try again!')
            } else if (ai === 2) {
                console.log('Win. Player: rock - AI: scissors.') 
            } else {
                console.log('Loss. Player: rock - AI: paper. Try again!') 
            }
            break;
        case 'paper':
            if (ai === 1) {
                console.log('Win. Player: paper - AI: rock.')
            } else if (ai === 2) {
                console.log('Loss. Player: paper - AI: scissors. Try again!') 
            } else {
                console.log('Tie. Player: paper - AI: paper. Try again!') 
            }
            break;
        case 'scissors':
            if (ai === 1) {
                console.log('Loss. Player: scissors - AI: rock. Try again!')
            } else if (ai === 2) {
                console.log('Tie. Player: scissors - AI: scissors. Try again!') 
            } else {
                console.log('Win. Player: scissors - AI: paper.') 
            }
            break;
    }
}

/*Play the game*/
rockPaperScissors('rock');


  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kmToMiles = (km) => km * 0.621371;
console.log('100 km to mi is: ' + kmToMiles(100));




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const feetToCM = (feet) => feet * 30.48;
console.log('100 ft to cm is: ' + feetToCM(100));  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





