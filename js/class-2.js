var x = 10;

{
    var x = 20;
    console.log("X:", x);
}

console.log("X:", x);

// ------------LET----------------

let l = 0;

{
    let l = 1;
    console.log("l:", l);
}

console.log("l:", l);

// ------------CONST----------------

const c = 20;

{
    const c = 30;
    console.log("c:", c);
}
console.log("c:", c);

// ------------STRING----------------

let stringSingleQuotation = 'String with Single Quotation\nSecond LINE\n\'c\':'+c+" peche c ki value thi\"\"";
let stringDoubleQuotation = "String with Double Quotation"; 
let stringBackTick = `String with Back ticket
isme hum multiline bhi likh skte hain
C: ${c} iske peche c ki value hai""''`;

console.log(stringSingleQuotation);
console.log(stringDoubleQuotation);
console.log(stringBackTick);

// ------------BOOL----------------
const trueValue = true;
const falseValue = false;

console.log(`True: ${trueValue}
False: ${falseValue}`);

// ------------UNDEFINED/NULL------


// console.log("A:", a); Reference Error

let a;
console.log(a);

let b = null;
console.log(b);

// ------------------DATE-------------
const date = new Date();
console.log(date);

// ------------------OBJECT-----------

const human = {
    fullName: 'Usama Akmal',
    age: 28,
}

console.log("Human Full Name", human["fullName"]);
console.log("Human Age", human.age);

human.fullName = "Usama Akmal Hussain Yazdani";
human["age"] = 30;
console.log("Human Full Name", human["fullName"]);
console.log("Human Age", human.age);

human.email = "iusamaakmal@hotmail.com";
human["mob"] = "+92334XXXXXXX"


console.log("Human", human);


// --------------ARRAY-------------
const arr = [1,2,3,4,5];

arr.push(6);
console.log("array", arr);

arr[2] = 15;
console.log("array", arr);

// ---------------------------

let num1 = 12;
let num2 = 15;
let result = num1 + num2;

console.log(result);
