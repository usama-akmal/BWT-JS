console.log("a", a);
console.log("fn", fn);
var a = 10;
function fn() {
    console.log(fn);
}

const abc = () => {
    
}
console.log("abc", abc);

console.log(0/0);

console.log(NaN);

console.log(0 == false)

console.log(-1 == false);

const loggedIn = "a";
const proSubscriber = "";

if (loggedIn == false){
    console.log("Please login first to see the data");
// } else if (proSubscriber == false) { }
} else if(!proSubscriber){
    console.log("You're logged in but not a subscriber!");
} else if(proSubscriber){
// } else if (proSubscriber == true) {
    console.log("Thanks, you're a pro subscriber");
}


console.log("you're done!");



console.log("Marksheet");


const percentage = prompt("Enter you're percentage");
// if (percentage > 100 || percentage < 0) {
//     console.log("Invalid Value!");
// } else if (percentage >= 90) {
//     console.log("A Grade!");
// } else if (percentage >= 80) {
//     console.log("B Grade!");
// } else if (percentage >= 70) {
//     console.log("C Grade!");
// } else if (percentage >= 60) {
//     console.log("D Grade!");
// } else {
//     console.log("F Grade!");
// }

if (percentage > 100 || percentage < 0) {
    console.log("Invalid Value!");
} else {
    if (percentage >= 90) {
        console.log("A Grade!");
    } else if (percentage >= 80) {
        console.log("B Grade!");
    } else if (percentage >= 70) {
        console.log("C Grade!");
    } else if (percentage >= 60) {
        console.log("D Grade!");
    } else {
        console.log("F Grade!");
    }
}

