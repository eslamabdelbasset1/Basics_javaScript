// 1- Write a program that allow to user enter number then print it---
// var num = window.prompt("Enter the number");
// console.log(num);
// document.write(num);
// End Number 1 -------------------------------------------------------

// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no ----------
// var num = window.prompt("Enter the number");
// if (num % 3 == 0 && num % 4 == 0)
// { console.log("Yes"); }
// else
// { console.log("No"); }
// End Number 2 -----------------------------------------------------

// 3- Write a program that allows the user to insert 2 integers then print the max -----
// var num_1 = window.prompt("Enter the number 1");
// var num_2 = window.prompt("Enter the number 2");
// if (num_1 > num_2)
// { console.log("Max Number = " + num_1); }
// else
// { console.log("Max Number = " + num_2) }
// End Number 3----------------------------

// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.------------
// var num = window.prompt("Enter the number");
// if (num < 0)
// { console.log("Negative"); }
// else
// { console.log("Positive"); }
// End Number 4--------------------

// 5- Write a program that take 3 integers from user then print the max element
// and the min element. -------------
// var arr = [
//     window.prompt("Enter the number 1"),
//     window.prompt("Enter the number 2"),
//     window.prompt("Enter the number 3"),
//     ];
//     console.log("Max:", Math.max.apply(null, arr));
//     console.log("Min:", Math.min.apply(null, arr));
// End Number 5

// 6or7- Write a program that allows the user to insert integer number then
// check If a number is oven or odd ----
// var num = window.prompt("Enter the number 1");
// if ( num % 2 == 0)
// { console.log(num + " : Even")}
// else { console.log(num + " : odd")}
// End Number 6

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// var char = window.prompt("Enter the character");
// if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U"
//     || char == "" || char == "e" || char == "i" || char == "o" || char == "u")
// { console.log(char.concat(" : Vowels")); }
// else { console.log(char.concat(" : Constant")); }
// End Example 8

// 9- Write a program that allows user to insert integer then print all numbers between 1 to
// that’s number
// Example 1
// var num = window.prompt("Enter the number");
// for (let i = 1; i <= num; i++)
// { console.log(i); }
// End Number 9

// 10- Write a program that allows usertoinsert integerthen print a multiplication table up to 12.
// var num = window.prompt("Enter the number");
// for (let i = 1; i <= 12; i++)
// { console.log(i * num); }
// End Number 10

// 11- Write a program that allows to user to insert number then print all even numbers
// between 1 to this number
// var num = window.prompt("Enter the number");
// for (let i = 1; i <= 15; i++)
// {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     else {}
// }
// End Number 11

// 12- Write a program that take two integers then print the power
// 1 solution ------------
// var base = window.prompt("Enter the base");
// var exponent = window.prompt("Enter the exponent");
// function power(base, exponent) {
//     var result = 1;
//     if(exponent == undefined)
//         exponent = 2;
//     for(var i=1; i<=exponent; i++) {
//         result = result * base;
//     }
//     return result;
// }
// console.log(power(base,exponent));
// 2 solution ------------
// var base = window.prompt("Enter the base");
// var exponent = window.prompt("Enter the exponent");
// console.log(Math.pow(base, exponent));
// End Number 12

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
//An array of numbers that we want to get the Sum and the average of.
// var elmt =
//     [
//         window.prompt("Enter The Mark Of DS"),
//         window.prompt("Enter The Mark Of SW"),
//         window.prompt("Enter The Mark Of Logic Programming"),
//         window.prompt("Enter The Mark Of Compiler Theory"),
//         window.prompt("Enter The Mark Of IT"),
//     ];
// var sum = 0;
// for( var i = 0; i < elmt.length; i++ ){
//     sum += parseInt( elmt[i], 10 );
// }
// var avg = sum/elmt.length;
// console.log( "The sum of all the Marks are: " + sum);
// console.log(" The average is: " + avg );
// console.log(" The Percentage is: " + avg );
// End Number 12

// 13-Write a program to input month number and print number of days in that
// month.----
// var get_days_in_month = function(month ,year) {
//     return new Date(year, month, 0).getDate();
// };
// console.log(get_days_in_month(1 ,2021));
// End Number 13

// 14- Write a program to input marks of five subjects Physics,
// Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// let elmt =
//     [
//         window.prompt("Enter The Mark Of Physics"),
//         window.prompt("Enter The Mark Of Chemistry"),
//         window.prompt("Enter The Mark Of Biology"),
//         window.prompt("Enter The Mark Of Mathematics"),
//         window.prompt("Enter The Mark Of Computer"),
//     ];
//     var sum = 0;
//     for( var i = 0; i < elmt.length; i++ ) {
//         sum += parseInt(elmt[i], 10);
//     }
//     var avg = sum/elmt.length;
//     console.log("Percentage: "+ avg);
//     if (avg >= 90) {
//         console.log("Grad A")
//     } else if (avg >= 80) {
//         console.log("Grad B")
//     } else if (avg >= 70) {
//         console.log("Grad C")
//     } else if (avg >= 60) {
//         console.log("Grad D")
//     } else if (avg >= 40) {
//         console.log("Grad E")
//     } else if (Percentage < 40) {
//         console.log("Grad F")
//     } else {
//         console.log("Not Grad")
//     }
// End Number 14

// 15- Write a program to create Simple Calculator Using switch case
// program for a simple calculator
// let result;
// // The operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// // The operand input
// const num_1 = parseFloat(prompt('Enter first number: '));
// const num_2 = parseFloat(prompt('Enter second number: '));
// switch(operator) {
//     case '+':
//         result = num_1 + num_2;
//         console.log(`${num_1} + ${num_2} = ${result}`);
//         break;
//     case '-':
//         result = num_1 - num_2;
//         console.log(`${num_1} - ${num_2} = ${result}`);
//         break;
//     case '*':
//         result = num_1 * num_2;
//         console.log(`${num_1} * ${num_2} = ${result}`);
//         break;
//     case '/':
//         result = num_1 / num_2;
//         console.log(`${num_1} / ${num_2} = ${result}`);
//         break;
//     default:
//         console.log('Invalid operator');
//         break;
// }
// // End Number 15


