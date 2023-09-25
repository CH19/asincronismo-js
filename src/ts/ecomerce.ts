// const fetchh = require('node-fetch')
export const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url: string){
    return fetch(url)
}

// fetchData(`${API}/products`).then(response =>{
//     if(response.ok) return response.json();
// }).then(products => console.log(products))

// console.log('hoa')

// fetchData(`${API}/products`).then(response =>{
//     if(response.ok) return response.json();
// }).then(products => {
//     console.log(products[0]);
//     console.log('----------');
//     fetchData(`${API}/products/${products[0].id}`).then(response2 =>{
//         if(response2.ok) return response2.json();
//     }).then(produc => {console.log(produc);
//     fetchData(`${API}/categories/${produc.category.id}`).then(resp => resp.json())
//     .then(content => console.log(content))
//     }).catch(error2 => console.log(error2))
// }).catch(error => console.log(error))