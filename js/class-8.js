let car = {
    model: 2020,
    // toString: () => {
    //     console.log(this.model)
    // }
    toString: function () {
        return this.model;
    }
}

// console.log(car.toString());
// console.log("toString" in car);
// console.log(car.hasOwnProperty("toString"));


function validAnagram(a,b) {
    const fa = frequencyCalculator(a);
    const fb = frequencyCalculator(b);
    let matchA = true;
    if (Object.keys(fa).length === Object.keys(fb).length) {
        for (let key in fa) {
            if (fa[key] !== fb[key]) {
                matchA = false;
            }
        }
    } else {
        return false;
    }

    return matchA;
}

function frequencyCalculator(a) {
    let obj = {};
    for (let ch of a) {
        if (ch in obj) {
            obj[ch] = obj[ch] + 1;
        } else {
            obj[ch] = 1;
        }
    }
    return obj;
}

// const check = validAnagram("cinema", "iceyan");
// console.log(check);

function createCounter(init) {
    let count = init;
    return {
        reset: function () {
            // this.counter = init;
            // return this.counter;
            count = init;
            return count;
        },
        increment: function () {
            // this.counter++;
            // return this.counter;
            count++;
            return count;
        },
        decrement: function () {
            // this.counter--;
            // return this.counter;
            count--;
            return count;
        }
    }
}

// const counter = createCounter(5);
// console.log(counter.counter);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

const arr = [1,2,3,4,5,6];
const cb = function (value, index, array) {
    console.log(value, index, array);
}
arr.forEach(cb);