// probando callbacks 
function sum(a:number, b:number):number{
    return a+b
}

function calc(num1:number, num2:number, callback:Function){
    return callback(num1, num2);
}

console.log(calc(3,5, sum));
// console.log(globalThis);
// ejemplo 2 con setTimeOut 

setTimeout(()=>{
    console.log('Hola javascript esto se ejecuto en segundos');
    setTimeout(saludo, 10000, 'Christian');
    console.log('adios este programa ha termiando');
}, 2000)

function saludo(name: string){
    console.log(`Hola ${name} como estas`);
}
console.log('fin del call stack tradicional ');