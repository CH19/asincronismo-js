(()=>{
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log('LA VIDA LA VIDA LA VIDA');
console.log('LA VIDA LA VIDA LA VIDA');
console.log(g.next().value);

console.log('LA VIDA LA VIDA LA VIDA');
console.log('LA VIDA LA VIDA LA VIDA');
console.log(g.next().value);


function* gen2(arr: string[]){
    for (let index = 0; index < arr.length; index++) {
        yield arr[index];
    }
}
const names = gen2(['Pedro', 'Juan', 'MAnuel', 'Daniel'])
console.log(names.next().value);
console.log(names.next().value);

console.log(names.next().value);

console.log(names.next().value);

function* getNumber(){
    let i = 0;
    while(true){
        yield i += 2
    }
}
const num = getNumber();
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);

})()