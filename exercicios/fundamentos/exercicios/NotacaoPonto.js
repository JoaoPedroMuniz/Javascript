console.log(Math.ceil(6.1))

const obj = {}

obj.nome = "Hello Bishop, are you doing?";

console.log(obj.nome);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log("exec...", nome);
};
};

const obj2 = new Obj('Karl, What you want?')
const obj3 = new Obj("Iris, Happy our birthday")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()