const [a1] = ['nota'];
console.log(a1);

const [, a2, , d, e = 1000] = [1, 2, 3, 4];

console.log(a2, d, e);

const [, [, num]] = [['play'], ['ablo', 'speak']];

console.log(num);