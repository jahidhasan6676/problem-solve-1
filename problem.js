// function toInch (inch){
//     const feet = inch / 12;
//     return feet;
// }
// const jahidheight = toInch(63);
// console.log(jahidheight)

// function toInch(inch){
//     const feet = inch / 12;
//     return feet;
// }
// const jahidheight = toInch(65);
// console.log(jahidheight)

// function inchToFeet(inch){
//     const feetFraction = inch / 12;
//     const feetInt = parseInt(feetFraction);
//     const feetflot = inch % 12;
//     const result = feetInt + ' ft ' + feetflot + ' inch ';
//     return result;

// }
// const jahidheight = inchToFeet(68);
// console.log(jahidheight)

// function feetAndInch (inch){
//     const feet = inch / 12;
//   const  feetInt = parseInt(feet);
//   const  feetfloat = inch % 12;
//     const result = feetInt + ' ft ' + feetfloat + ' inch ';
//     return result;
// }
// const jahidheight = feetAndInch(66);
// console.log(jahidheight)

// function mileToKilomiter (mile){
//     const kilo = mile * 1.60934;
//     return kilo;
// }
// const miles = mileToKilomiter(2);
// console.log(miles)

// function kiloToMile (kilo){
//     const kiled = kilo * 0.621371;
//     return kiled;
// }
// const kilos = kiloToMile(2);
// console.log(kilos)

// function kiloToMile (kilo){
//     const kiled = kilo * 1000;
//     return kiled;
// }
// const kilos = kiloToMile(2);
// console.log(kilos)

// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const learyear = isLeapYear(2030);
// console.log(learyear)

// function isLeapYear(year){
//     if(year % 100 !== 0 && year % 4 === 0){
//         return true;
//     }
//     else if(year % 100 == 0 && year % 400 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const leapyear = isLeapYear(2024);
// console.log(leapyear);

// function avaOdd(numbers){
//     let sum = 0;
//     let odds = [];
//     for(const number of numbers){
//        if(number % 2 === 1){
//         odds.push(number);
//         const count = odds.length;
//         console.log(odds, count);
//              sum = sum + number;
//              avarage = sum / 4;
             
            
//        }
      
//     }
//     return avarage;
// }

// const numbers = [23, 33, 54, 56, 67, 69];
// const avg = avaOdd(numbers);
// console.log('avarage odd number of is:', avg);



// function noDuplicate(array){
//  const  unique = [];
//    for (const arr of array){
//         if(unique.includes(arr) === false){
//             unique.push(arr);

//         }
//    }
//    return unique;

// }

// const biriyanikhor = ['jahid', 'hasan', 'kamrul', 'jahid', 'kamrul'];
// const uniqueArray = noDuplicate(biriyanikhor);
// console.log(uniqueArray);

// function noAgain(array){
//     const unique = [];
//     for(const item of array){
//        if(unique.includes(item) === false){
//         unique.push(item);
//        }
//     }
//     return unique;
// }

// const numbers = noAgain([12, 5, 12, 6, 4, 5, 81, 81, 6]);
// console.log('actually number of is:', numbers);


// const min = Math.min(12, 23, 343, 4, -3, 1);
// console.log(min);

// const max = Math.max(12, 23, 343, 4, -3, 1);
// console.log(max);

// console.log(Math.abs(-88))
// console.log(Math.abs(10 - 15))



// console.log(Math.floor(3.0001))

// console.log(Math.random()*10)

// const rand = (Math.round((Math.random()*10)))
// console.log(rand)

// const today = new Date();
// console.log(today.toLocaleString())
// const date = new Date('2062-10-19');
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());
// const date = new Date(2091, 0 , 16);
// console.log(date);
// date.setMonth(9);
// date.setDate(14);
// console.log(date.toLocaleString('en-GB'))

// let a = 6;
// let b = 8;

// console.log(a, b);
// const temp = a;
// a = b;
// b = a;
// console.log(a, temp)

// let x = 5;
// let y = 7;
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y)
// console.log(Math.pow(2,3))

// function celsiusToFahrenheit(celsius){
//     const fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit;

// }
// const degree = celsiusToFahrenheit(30);
// console.log(degree);

// function fahrenheitToCelsius(fahrenheit){
//     const celsius = fahrenheit - 32 * 5 / 9;
//     return celsius;

// }
// const degree = fahrenheitToCelsius(86);
// console.log(degree);

// 

// function countNumber(numbers , find){
//     let count = 0;
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] === find){
//             count++;
//         }
//     }
//     return count;
// }
// const number1 = [5, 3, 5, 7, 6, 5, 8, 9];
// const find1 = 5;
// console.log(countNumber(number1, find1));

// const number2 = [5, 3, 5, 7, 6, 5, 8, 9];
// const find2 = 25;
// console.log(countNumber(number2, find2));

// function count(sentence){
//     const findVowels = ['a', 'e', 'i', 'o', 'u'];
//         let count = 0;
//         for(let i = 0; i < sentence.length; i++){
//             if(findVowels.includes(sentence[i])){
//                 count++;
//             }
//         }
//         return count;
//     }

//     const sentence = 'i am a good boy my name is hasan i am collage e pori';
   
//     console.log(count(sentence,));

// function count(sentence){
//     let vowels =  ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(let i = 0; i < sentence.length; i++){
//         if(vowels.includes(sentence[i])){
//             count++;
//         }
//     }
//     return count;
// }
// const sentence = 'i am a good boy my name is hasan i am collage e pori';
// console.log(count(sentence));

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage:
// let randomNumber = getRandomNumber(10, 20);
// console.log(randomNumber);

// function getRandomNumber() {
//     return Math.floor(Math.random() * 11) + 10;
// }

// console.log(getRandomNumber());


// console.log(Math.random()*10)

// const rand = (Math.round((Math.random()*10)))
// console.log(rand)

// console.log(Math.random()*10)
// const random = (Math.round((Math.random()*10)+10))
// console.log(random)