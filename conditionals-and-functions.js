/*
* Conditionals, Functions, Scope and Loops.

//Equals
let equals = 1 === 1;
console.log(equals)

// Greater Than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;
*/
/*

//let storeA = 2.40;
//let storeB = 3.40;

//let storeAIsLower = storeA < storeB;
// console.log(storeAIsLower);

//if (storeAIsLower) {
//    console.log("Store A has a lower price.")
//} else if (storeB < storeA) {
//console.log ("Store B has a lower price.")
//} else {
//console.log ("Their prices are equal.")
//}

/*
/ functions
 */
/*
//function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIs) {
       console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
    console.log("Their prices are equal.")
}
//}
*/
/*
//compareStorePrices(10, 5);
//compareStorePrices (7, 10)

//function squareNum (number) {
//return number * number;
//}

//let squaredNumber = squareNum(4)
//console.log(squaredNumber)
*/

/*
//Scope
 */
/*
let x = 10;

function addNumbers (n, m, x) {
    console.log (x);
    let b;
    if (1===1) {
        b = 8;
    }

    console.log(b);
    return n + m;
}

//addNumbers(1, 2,    10);
//console.log(x);
/*
/Arrays
 */
//                        0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

//loops

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("is equal to: " + i);
   console.log(ourArray[i]);
}