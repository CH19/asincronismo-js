(()=>{
const api = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi:string) {
    const response = await fetch(urlApi)
      const p = await response.json();
      return p
    // console.log(products);
    // return products
}
// console.log(fetchData(`${api}/products`));
// fetchData(`${api}/products`);
const product = async (url: string)=> {
    try{
        const products = await fetchData(`${url}/products`);
        const produc = await fetchData(`${url}/products/${products[0]?.id}`);

        console.log(products);
        console.log(produc);
    }catch(error){
        console.log(error);
    }

}
product(api);
// fetchData(`${api}/products`)
})()