const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Pong',
        //     age: 26
        // });

        reject('Something went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('success: ', data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');