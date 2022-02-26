console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
console.log("**********Q1 START ********");
console.log(str1.concat(" ",str2.trim()," ",str3.trim()));
console.log("**********Q1 END***********");

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
console.log("***********Q2 Start***********");
var enteredAlphabet = 'd';

if((enteredAlphabet >= 'A' && enteredAlphabet <= 'Z') || (enteredAlphabet>= 'a' && enteredAlphabet <= 'z'))
{
    switch(enteredAlphabet.toUpperCase())
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            console.log(enteredAlphabet + " is a VOWEL.");
            break;
        default: 
            console.log(enteredAlphabet + " is a CONSONANT.");
            break;
    }
}
else
{
    console.log(enteredAlphabet + " is not an alphabet.");
}
console.log("************Q2 END**********")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.
// console.log("***********Q3 START ************")
// var number1 = parseInt(prompt("Enter the First number: "));
// var number2 = parseInt(prompt("Enter the Second number: "));
// var operator = prompt("Enter the operator ( either +, -, * or / ): ");
// var result;
// switch(operator){ 
//     case '/':
//         console.log("***Its Division***");
//         result = number1 / number2;
//         console.log(number1 + operator + number2 + " = " + result);
//         break;
//     case '+':
//         console.log("***Its Addition***");
//         result = number1 + number2;
//         console.log(number1 + operator + number2 + " = " + result);
//         break;

//     case '-':
//         console.log("***Its Substraction***");
//         result = number1 - number2;
//         console.log(number1 + operator + number2 + " = " + result);
//         break;

//     case '*':
//         console.log("***Its multiplication***");
//         result = number1 * number2;
//         console.log(number1 + operator + number2 + " = " + result);
//         break;
//     default:
//         console.log('Invalid operator');
//         break;
// }
// console.log("***********Q3 END ************");

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.
// console.log("***********Q4 START***************");
// var side1 = parseInt(prompt("Enter the First side of triangle: "));
// var side2 = parseInt(prompt("Enter the second side of triangle: "));
// var side3 = parseInt(prompt("Enter the third side of triangle: "));
// if (side1 == side2 && side2 == side3){
//     console.log("Equilateral Triangle");
// }else if (side1 == side2 || side2 == side3 || side3 == side1){// Check for isosceles triangle
//     console.log("Isosceles Triangle");
// }else{// Otherwise scalene triangle
//     console.log("Scalene Triangle");
// }
// console.log("***********Q4 END ***************")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354
console.log("************Q5 START***************");

var  amount, total_amount, sur_charge=0;
var unit = parseInt(prompt("Enter total units consumed: "));

/* Calculate electricity bill according to given conditions */
console.log("Total number of Units :" + unit);
if(unit <= 50){
    amount = unit * 0.50;
}else if(unit <= 150){
    amount = 25 + ((unit-50) * 0.75);
}else if(unit <= 250){  
    amount = 100 + ((unit-150) * 1.20);
}else{
    amount = 220 + ((unit-250) * 1.50);
    sur_charge = amount * 0.20;
}

total_amt = amount + sur_charge;

console.log("Total Electricity Bill = Rs." + total_amt);

console.log("************Q5 END ***************")
// if( units <= 50 ){
//     totalCost = units * 0.50;
//     console.log(totalCost) // 50 units = 25 rps
//  }else if(units <= 150 ){
//     var remainingUnits = units - 50;
//     totalCost = (remainingUnits * 0.75) + 25
//     console.log(totalCost); // 150 units = 100
//  }else if( units <= 250 ){
//     var remainingUnits = units - 150;
//     totalCost = ( remainingUnits * 1.20 ) + 100
//     console.log(totalCost) // 250 units = 220 rps
//  }else{
//    var remainingUnits = units - 250
//    totalCost = ( remainingUnits * 1.50 ) + 220
//    var tax = 20 / 100 * totalCost;
//    totalCost = totalCost + tax;
//    console.log(totalCost)
//  }
 