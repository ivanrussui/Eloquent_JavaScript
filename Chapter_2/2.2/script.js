const n = 100;

for (let i = 1; i <= n; i++) {
    let res = '';

    if (i % 3 === 0) {
        res = 'Fizz';
    }
    if (i % 5 === 0) {
        res += 'Buzz';
    }

    if (res) {
        console.log(res);
    } else {
        console.log(i);
    }
}
