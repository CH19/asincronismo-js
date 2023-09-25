// importar un producto con sus categorias de manera asincrona con la api de platzi 
// usar funciones asincronas 
import { API } from "../ecomerce";

const fetchPRoducts =  (urlApi: string, callback: Function) =>{
    fetch(urlApi).then(response => {if(response.ok) return response.json()})
    .then(products => callback(API,products, null))
    .catch(error => callback(API,null, error));
}

const fetchProduct = async (api: string, products: any, error: Error) => {

   await fetch(`${api}/products/${products[0].id}`)
        .then(product => product.json())
        .then(p => console.log(p))
}

fetchPRoducts(`${API}/products`, fetchPRoducts);