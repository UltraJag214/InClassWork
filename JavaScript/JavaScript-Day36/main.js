// Example 1

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
// }

// async function add1(x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;
// }
  
//   add1(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
// });


// Example 2

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
// }

// async function add1(x) {
//     const pA = resolveAfter2Seconds(20);
//     const pB = resolveAfter2Seconds(30);
//     return x + await pA + await pB;
// }
  
// add1(10).then(v => {
//     console.log(v);  // prints 60 after 2 seconds.
// });


// Example 3

// const makeRequest = () => {
//     return promise1()
//       .then(value1 => {
//         // do something
//         return promise2(value1)
//           .then(value2 => {
//             // do something          
//             return promise3(value1, value2)
//         })
//     })
// }

// const makeRequest = async () => {
//     const value1 = await promise1()
//     const value2 = await promise2(value1)
//     return promise3(value1, value2)
// }
  
  
