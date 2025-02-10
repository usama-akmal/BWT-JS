// const day = prompt("Enter day").toLowerCase(); // "MoNdAy".toLowerCase()
// console.log("Day", day);
// const lowerCaseDay = day.toLowerCase();
// console.log("Lower case day", lowerCaseDay);
// const upperCaseDay = day.toUpperCase();
// console.log("Upper case day", upperCaseDay);

// if (upperCaseDay == "MONDAY") {
//     console.log("Yes it is monday");
// }

// const zeroComparision = 0 === -0;
// console.log(zeroComparision);


// let i = 0;
// for(; ; ){
//     if (i < 5) {
//         console.log("ABC");
//         i = i + 1
//     } else {
//         break;
//     }    
// }

// for (let i = 1; i < 21; i = i + 1) {
//     console.log("i", i);
// }

// const n = 20;
// let sum = 0;
// for (let i = 1; i <= n;i = i+1) {
//     console.log(`${sum} + ${i} = `);
//     sum = sum + i;
//     console.log(sum);
// }

// const start = 20;
// const end = 1;

// for (let i = start; i >= end; i = i - 1) {
//     console.log(i);
// }

const start = 1;
const end = 40;

for (let i = start; i <= end; i++) {
    if(i % 5 == 0) {
        continue;
    }
    if (i % 2 == 0) {
        console.log("Even Number Found =", i);
    }
}

let input = "";
// while(input != "usama") {
//     input = prompt("Enter password");
//     if (input == "usama") console.log("Access Granted!");
//     else console.log("Incorrect Password!");
// }

let attempt = 0;
do {
    input = prompt("Enter password");
    if (input == "usama") console.log("Access Granted!");
    else {
        console.log("Incorrect Password!");
        attempt++;
    }
    
    if (attempt == 3) {
        console.log("Your account is blocked");
        break;
    }
} while (input != "usama")
    