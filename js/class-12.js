// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const fetchData = async () => {
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "GET"
        });
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

const createData = async () => {
    const body = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
    console.log(body);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    console.log(data);
}

createData();