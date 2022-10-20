import fetch from 'node-fetch';

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(x * 2);
        }, 2000);
    });
}

// doubleAfter2Seconds(10).then((r) => console.log(r));

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);

    return x + a + b + c;
}

addAsync(10).then((sum) => console.log(sum));