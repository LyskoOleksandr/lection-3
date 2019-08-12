const age = 21;

let counter = 1;    

// while (counter < 1000) {
//     if (counter % age === 0) {
//         console.log(`counter -  ${counter}`);
//     }
//     counter++;
// }

console.log('do while');


do {
    if (counter % age === 0) {
        console.log('counter - ', counter);
    }
    counter++;
} while (counter < 1000);

for (let counter = 1; counter < 1000; counter++) {
    if (counter % age === 0) {
        console.log('counter - ', counter);
    }
}