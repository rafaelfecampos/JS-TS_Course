let a = 1;
let b = 2.25;

console.log(a.toString() + b);
console.log(typeof(a) + "  " + typeof(b));

let c = 8045;
console.log(c.toString(16));
console.log(b.toString(2));

let d = Math.PI;
console.log(d.toFixed(4));

console.log(Number.isInteger(a));
console.log(Number.isInteger(b));

let aux = a * "avc";
console.log(Number.isNaN(aux));
console.log(Number.isNaN(a));



