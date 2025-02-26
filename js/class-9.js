// Class 9 - Bubble Sort

// const array = [2,3,4,1,-1,-5,12,0];

// for(let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if(array[i] < array[j]) {
//             const temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//         console.log(`${i}, ${j} : [${array}]`)
//     }
// }


// console.log(array);

// Cipher Encode Decode



function encodeDecodeMessage(message) {
    const key = "GA-DE-RY-PO-LU-KI";
    const keyArray = key.split("-");
    const keyObject = {};
    // console.log(keyArray);
    // for (let pair of keyArray) {
    //     keyObject[pair[0]] = pair[1];
    //     keyObject[pair[1]] = pair[0];
    //     keyObject[pair[0].toLowerCase()] = pair[1].toLowerCase();
    //     keyObject[pair[1].toLowerCase()] = pair[0].toLowerCase();
    // }
    for (let i = 0; i < keyArray.length; i++) {
        let pair = keyArray[i];
        const a = pair[0];
        const b = pair[1];
        keyObject[a] = b;
        keyObject[b] = a;
        keyObject[a.toLowerCase()] = b.toLowerCase();
        keyObject[b.toLowerCase()] = a.toLowerCase();
    }

    // console.log(keyObject);
    const encodedMessage = [];
    
    // for (let ch of message) {
    //     if (ch in keyObject){
    //         encodedMessage.push(keyObject[ch]);
    //     } else {
    //         encodedMessage.push(ch);
    //     } 
    // }

    for (let i = 0; i < message.length; i++) {
        const ch = message[i];
        if (ch in keyObject){
            encodedMessage.push(keyObject[ch]);
        } else {
            encodedMessage.push(ch);
        } 
    }
    console.log(encodedMessage);
    
    return encodedMessage.join("");
}

// console.log(encodeDecodeMessage("My name is Usama Akmal"));
// console.log(encodeDecodeMessage("Mr ngmd ks Lsgmg Gimgu"));

// # Dom Manipulation
function changeStyle() {
    const p = document.getElementById("text");
    p.style.color = "green";
    p.style.backgroundColor = "lightgrey";
    p.style.fontSize = "18px";
    // p.textContent = "<b>Style Changed!</b>"
    p.innerHTML = "<b>Style Changed!</b>"

    const qp = document.querySelector("body > p:nth-child(2)");
    qp.style.color = "blue";
    console.log(qp);

    const heading = document.createElement("h1");
    const textNode = document.createTextNode(new Date().toDateString());
    heading.appendChild(textNode);
    document.body.appendChild(heading);
}

// p.className = "ABC";

// const currentDataAndTime = new Date();
// console.log(currentDataAndTime);

// const dateOfBirth = new Date(1996, 9, 4);
// console.log(dateOfBirth);

// console.log(dateOfBirth.getDay())

// console.log(dateOfBirth.toLocaleString('en-IN'));


// console.log("Timeout setup start");
// setTimeout(() => {
//     console.log("Timeout triggerd");
// }, 1000 * 2);
// console.log("Timeout setup completed");

console.log("Interval setup start");
let intervalCount = 0;
const intervalId = setInterval(() => {
    console.log("Interval triggerd");
    intervalCount++;
    if(intervalCount == 10){
        clearInterval(intervalId);
        console.log("Interval clreared");
    }
    const counter = document.getElementById("counter");
    counter.textContent = intervalCount;
}, 1000 * 2);
console.log("Interval setup completed");