// сначала сделал так тут отличие в том, что от 0
// let n = 100;
//
// for (let i = 0; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0 && i !== 0)  {
//         console.log('Fizz');
//     } else if (i % 5 === 0 && i !== 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


let n = 100;

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0)  {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
