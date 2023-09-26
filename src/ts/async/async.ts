import { rejects } from "assert"
import { resolve } from "path"

const fnAsync = ()=>{
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(()=> resolve('Funciono'), 0)
        : reject('no funciono');
    })
}

const anotherFn = async () => {
    const something  = await fnAsync().then(resp => resp);
    console.log(something);
    console.log('hello');
}

console.log('Before async function');
anotherFn();
console.log('Afet async function');

