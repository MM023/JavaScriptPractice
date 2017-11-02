/* Write a function that multiplies two values, a and b, without simply using a * b
   Assumptions:
   1. Both values are whole number integers
*/

/* Though Process:
   Scenario 1: If one of the numbers is 0, return 0 because any number times 0 is 0.
   Scenario 2: If ond of the numbers is positive and the other number is negative, 
               return a negative version of the answer.
   Scenario 3: If both numbers are positive and both numbers are negative, return 
               the positive version of the answer.
   Improvements:
    - Check for 0 first. We can return 0 immediately
    - Check for the smaller number and set as the loop bound, we can reduce the number of loops
*/

function multiply(a, b) {
    
    if ( a === 0 || b === 0 ) {
        return 0;
    } else { 
        var absoluteA = Math.abs(a);
        var absoluteB = Math.abs(b);

        var smallNumber = absoluteA
        var bigNumber = absoluteB;
      
        if (bigNumber < smallNumber) {
          smallNumber = absoluteB;
          bigNumber = absoluteA;
        }
        var sum = bigNumber;

        for (var i = 1; i < smallNumber; i++) {
            sum = sum + bigNumber;

        }

        return sum *= posOrNegative(a, b);
    }
}

function posOrNegative(a, b) {
    if (a < 0 && b < 0 || a > 0 && b > 0)
        return 1;
    if (a < 0 && b > 0 || a > 0 && b < 0)
        return -1;
}


var bothPositive = multiply(2, 100);
var oneNegative = multiply(3, -7);
var bothNegative = multiply(-6, -7);

console.log('2 x 100 = ', bothPositive);
console.log('3 x -7 = ', oneNegative);
console.log('-6, -7 = ', bothNegative);
