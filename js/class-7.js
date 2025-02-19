// let library = [
//     {
//         title: "Book 1",
//         author: "Author 1",
//         published : "2020"
//     },
//     {
//         title: "Book 2",
//         author: "Author 2",
//         published : "2022"
//     },
//     {
//         title: "Book 3",
//         author: "Author 3",
//         published : "2023"
//     }

// ];

// library.push({
//     title: "book 4",
//     author: "Author 4",
//     published: "2025"
// });

// console.log(library);


// for (let index = 0; index < library.length; index++) {
//     if(library[index].title === "book 4"){
//         console.log(`Title ${library[index].title}`);
//         console.log(`Author ${library[index].author}`);
//         console.log(`Published ${library[index].published}`);
//     }
    
// }

// for (let index = 0; index < library.length; index++) {
//     if(library[index].title === "Book 2"){
//         library.splice(index,1);
//     }
    
// }

// console.log(library);

// for (let index = 0; index < library.length; index++) {
//     if(library[index].title === "book 4"){
//         library[index].published = "2019"
//     }
    
// }

// console.log(library);

// let todos = [];
// let operation;
// do {
//     operation = +prompt(`Select your desired operation
//         1. list
//         2. add
//         3. delete
//         4. quit`);
    
//     if (operation < 1 || operation > 4) {
//         alert("Not a valid selection of operation");
//         continue;
//     }

//     if (operation === 1) {
//         console.log(`List todos start:`);
//         for (let index = 0; index < todos.length; index++) {
//             const element = todos[index];
//             console.log(`Todo[${index+1}]: ${element}`);            
//         }
//         console.log(`List todos end`);
//     } else if (operation === 2) {
//         let input; 
//         do {
//             input = prompt("Enter your todo:");
//             if (input.trim() === "") {
//                 alert("Invalid input");
//                 continue;
//             } else {
//                 todos.push(input);
//                 break;
//             }
//         } while (true)
//     } else if (operation === 3) {
//         if (todos.length) {
//             let position;
//             do {
//                 position = +prompt("Enter your todo position:");
//                 if (position < 1 || position > todos.length) {
//                     alert("Invalid position");
//                     continue;              
//                 } else {
//                     todos.splice(position-1, 1);
//                     break;
//                 }
//             } while (true);
//         } else {
//             alert("Your list is empty");
//         }
//     }
        
// } while (operation != 4);


// const arr = ["A", "B", "C", "a", "b", {a: 2}];

// console.log(arr.indexOf({a: 2}));

// console.log("Dr suggested, \"Do not drink cold water\"");
// console.log("C:\\Windows");
// console.log("Line 0\nLine 1\n\tTabbed");
// const _name = "Usama Akmal";
// console.log(_name.indexOf('k'));
// console.log(_name.lastIndexOf('a'));

// const splittedName = _name.split(" ");
// console.log(`Splitted Name:`, splittedName);

// console.log(`Last name: ${_name.slice(_name.indexOf(" ")+1, _name.length)}`)

// const straightString = "We are learning javascript";
// const reverseStringArr = [];
// let r = "";
// for (let index = straightString.length - 1; index > -1; index--) {
//     reverseStringArr.push(straightString[index]);
//     r += straightString[index];
// }
// console.log(reverseStringArr.join(""));
// console.log(r);

const email = prompt("Enter email to mask:");
const masked = [email[0]];
const indexOfAtSym = email.indexOf("@");

if (indexOfAtSym > 2) {
    for (let i = 1; i < indexOfAtSym - 1; i++) {
        masked.push("*");
    }
    masked.push(email.slice(indexOfAtSym - 1, email.length));
    alert(`Masked email: ${masked.join("")}`);
} else {
    alert(`Masked email: ${email}`)
}
