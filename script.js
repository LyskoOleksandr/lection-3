// // // const age = 21;

// // // let counter = 1;    

// // // while (counter < 1000) {
// // //     if (counter % age === 0) {
// // //         console.log(`counter -  ${counter}`);
// // //     }
// // //     counter++;
// // // }

// // // console.log('do while');


// // // do {
// // //     if (counter % age === 0) {
// // //         console.log('counter - ', counter);
// // //     }
// // //     counter++;
// // // } while (counter < 1000);

// // // for (let counter = 1; counter < 1000; counter++) {
// // //     if (counter % age === 0) {
// // //         console.log('counter - ', counter);
// // //     }
// // // }


// // function areaFunction(side, h) {
// //     const area = (side * h) / 2;
// //     return area;
// // }

// // // console.log(areaFunction(3,4));

// // function showArea () {
// //     const otherArea = areaFunction(3, 4);
// //     console.log('your mama is too big LoL -', otherArea);
// // }

// // showArea();







// function sumFromTo(from, to) {
//     if (from && to && !isNaN(from) && !isNaN(to)) {
//         let sum = 0;
//         for (let counter = from; counter <= to; counter++) {
//             sum += counter;
//         }
//         return sum;
//     } else {
//         return 'someshit';
//     }
// }

// console.log(sumFromTo());
// console.log(sumFromTo(3, 9));
// console.log(sumFromTo(3, 9));







function createList(list) {
    for (let counter = 0; counter < list.length; counter++) {
        const firstLetter = list[counter][0].toUpperCase();
        console.log(firstLetter + list[counter].substr(1));

    }
}

const secondList = ['Beer', 'Creeps', 'Hodld'];

createList(secondList);