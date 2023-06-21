const valores = [9.1, 1.2, 8.1 ,"teste"];
console.log(valores);

console.log(valores[0]);

valores.push(true, false);

console.log(valores);

console.log(typeof valores);
delete valores[4];
console.log(valores);
console.log(valores.pop());
console.log(valores);
delete valores[2];
console.log(valores)