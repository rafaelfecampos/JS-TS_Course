// let i = 0;

// while (i <= 10) {
//     console.log(i++);

// }

const random = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = 10;
console.log(rand);


// while (rand !== 10){
//     rand = random(1,21);
//     console.log(rand);
// }

do {
    rand = random(1, 21);
    console.log(rand);
} while (rand !== 10);