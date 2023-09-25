import { API } from "./ecomerce.js";

// console.log(API);

function postProduct(urlData: string, data : object){
    const response = fetch(urlData, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'        },
        body: JSON.stringify(data),
    })
    return response
}
const datita = {
    "title": "CH19 estuvo aqui",
    "price": 777,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postProduct(`${API}/products`, datita)
    .then(response => response.json())
    .then(solicitud => console.log(solicitud))
