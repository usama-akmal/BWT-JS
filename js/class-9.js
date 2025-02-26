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

console.log(encodeDecodeMessage("My name is Usama Akmal"));
console.log(encodeDecodeMessage("Mr ngmd ks Lsgmg Gimgu"));