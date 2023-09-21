const promise = new Promise((resolve, reject)=>{
    resolve('hey');
});

const cows = 9;

const cowCounts = new Promise((resolve, reject)=>{
    if(cows > 10){
        resolve(`We have ${cows}, cows on the farm`);
    }else{
        reject('There is no cows in the farm');
    } 
})

cowCounts.then((result)=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})