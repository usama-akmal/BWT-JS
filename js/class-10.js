// const nameElement = document.getElementById("name");
// const submitButtonElement = document.getElementById("submitName");
// const nameOutputElement = document.getElementById("nameOutput");
// const nameOutput2Element = document.getElementById("nameOutput2");

// const submitButtonEvent = () => {
//     nameOutputElement.textContent = nameElement.value;
// }
// const onInputEvent = () => {
//     console.log('onInputEvent called with value', nameElement.value);
//     nameOutput2Element.textContent = nameElement.value;
// }
// submitButtonElement.addEventListener('click', submitButtonEvent);
// nameElement.addEventListener('input', onInputEvent);

// This binding in function declaration vs arrow fn
// const obj = {
//     name: 'Alice',
//     regularFunction: function() {
//         console.log(this);  // 'this' refers to 'obj' in this case
//     },
//     arrowFunction: () => {
//         console.log(this);  // 'this' refers to the global context (or undefined in strict mode)
//     }
// };

// obj.regularFunction();  // Output: 'Alice'
// obj.arrowFunction();    // Output: undefined (or throws error in strict mode)
  

// Callback function 

// const calculate = (a,b,cb) => cb(a,b)

// const addition = (a,b) => a + b
// const division = (a,b) => a / b
// const multiplication = (a,b) => a * b
// const subtraction = (a,b) => a - b
// const power = (a,b) => a ** b

// console.log(calculate(4,2, addition));
// console.log(calculate(4,2, subtraction));
// console.log(calculate(4,2, division));
// console.log(calculate(4,2, multiplication));
// console.log(calculate(4,2, power));


// MAP
// const toUppercase = (s) => {
//     return s.toUpperCase();
// }

// const strArr = ["a", 'b','c'];
// const upperCaseArr = strArr.map(toUppercase) 
// console.log(upperCaseArr);

const students = [
    {
        firstName: 'A', lastName: 'B'
    },
    {
        firstName: 'C', lastName: 'D'
    },
    {
        firstName: 'E', lastName: 'F'
    }
];

const operation = (student) => student.firstName + ' ' + student.lastName;
const operation2 = (student) => {
    student.fullName = student.firstName + ' ' + student.lastName;
    return student;
};

// ["A B", "C D", "E F"]
console.log(students.map(operation2))

