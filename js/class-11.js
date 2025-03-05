// function processResponse (data) {
//     const { name } = data;
//     console.log("Response", name);
// }

// function fetchData(cb) {
//     setTimeout(() => {
//         const data = {
//             name: "Usama",
//             age: 28
//         }
//         cb(data);
//     }, 2000);
// }

// fetchData(processResponse);
// console.log("fetching data...");


// function orderPizza (preparePizza, servePizza) {
//     setTimeout(() => {
//         console.log("Step 1, Ordering Pizza");
//         preparePizza(servePizza)
//     }, 4000);
// }

// function preparePizza (servePizza) {
//     setTimeout(() => {
//         console.log("Step 2, Preparing Pizza");
//         servePizza()
//     }, 3000);
// }

// function servePizza () {
//     setTimeout(() => {
//         console.log("Step 3, Serving Pizza");
//     }, 1000);
// }

// orderPizza(preparePizza, servePizza);
// preparePizza();
// servePizza();

function orderPizza () {
    const callback = (resolve, reject) => {
        setTimeout(() => {
            resolve("Step 1, Ordering Pizza");
            // reject("Your desired pizza is not Available")
        }, 4000);
    }
    return new Promise (callback);
}

function preparePizza () {
    const callback = (res, rej) => {
        setTimeout(() => {
            res("Step 2, Preparing Pizza");
        }, 3000);
    }
    return new Promise(callback);
}

function servePizza () {
    const cb = (res, rej) => {
        setTimeout(() => {
            res("Step 3, Serving Pizza");
        }, 1000);
    }
    return new Promise(cb);
}

// const orderPizzaPromise = orderPizza();
// orderPizzaPromise.then((result) => {
//     console.log(result);
//     const preparePizzaPromise = preparePizza();
//     preparePizzaPromise.then((result) => {
//         console.log(result);
//         const servePizzaPromise = servePizza();
//         servePizzaPromise.then((message) => {
//             console.log(message);
//         });
//     })
// })

async function main() {
    try {
        const orderPizzaMessage = await orderPizza()
        console.log(orderPizzaMessage);
        const preparePizzaMessage = await preparePizza();
        console.log(preparePizzaMessage);
        const servePizzaMessage = await servePizza();
        console.log(servePizzaMessage);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Main is executed")
    }
}

console.log("Calling Main");
main();// .then(() => console.log("Main is executed"));
console.log("Called Main");