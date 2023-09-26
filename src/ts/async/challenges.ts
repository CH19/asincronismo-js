// importar un producto con sus categorias de manera asincrona con la api de platzi 
// usar funciones asincronas 
// import { API } from "../ecomerce";
const api = 'https://api.escuelajs.co/api/v1';

const fetchPRoducts =  (urlApi: string, callback: Function) =>{
    fetch(urlApi).then(response => {if(response.ok) return response.json()})
    .then(products => callback(api,products, null))
    .catch(error => callback(api,null, error));
}

const fetchProduct = async (api: string, products: any, error: Error) => {

   await fetch(`${api}/products/${products[0].id}`)
        .then(product => product.json())
        .then(p => console.log(p))
        .catch(error => console.log(error))
}
fetchPRoducts(`${api}/products`, fetchProduct);