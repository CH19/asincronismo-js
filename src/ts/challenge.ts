import { url } from "inspector";

// Utilizar la api de platzi de productos para hacer metodos get de manera asincrona 

// importamos el objeto xmlhttprequest para hacer solicitudes a apis 
const xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;
// instaciamos la api como constante 
const API = 'https://api.escuelajs.co/api/v1';

// creamos una funcion que tendra como parametro la termianl de la api a la que se desea acceder y el callback que retornara la fecth data 
function fetchData(urlApi: string, callback: Function){
    // instanciamos el objeto xmlhttprequest para la creacion de objetos 
    const xmlhttp: XMLHttpRequest = new xmlhttprequest();

// utilizamos el metodo open para hacer la solicitud con el metodo xmlhttprequest,
// el primer parametro de la funcion es el verbo de la peticion http que se desea 
// el segundo parametro es la url de la api a solicitar y el tercer parametro booleano es la decision de si la solicitud se hara asincrona o no 
    xmlhttp.open('GET', urlApi, true);
// el metodo onreadyStage detecta los cambios del objeto xmlhttp obtiene el Evento 
    xmlhttp.onreadystatechange = (event)=>{

        // con el atributo ready state hacemos un condicional para saber que el metodo xmlhttp ha terminado en el  el atributo de la
        // peticion significa que esta completado 
        // xmlhttp status obtiene el codigo de estado del servidor que retorna la solicitud  y a partir de eso nos dira si la peticion fue recibida y aceptada 
        if(xmlhttp.readyState == 4){
            console.log('el codigo es 4');
            if( xmlhttp.status == 200){

                callback(null, JSON.parse(xmlhttp.responseText))
            }else{
                console.log('HUBO UN ERROR');
                const error = new Error('Error' + urlApi);
                return callback(error, null)
            }
            }
    }
    xmlhttp.send();
}

fetchData(`${API}/products`, (error1: Error, data: any)=>{
    if(error1) return console.log(error1);
    // colocamos otra funcion fetchData para hacer llaamda a un producto en general en caso de que no se retorne un error 
    fetchData(`${API}/products/${data[0].id}`, (error2: Error, data2: any)=>{
        if(error2) return console.log(error2);
        console.log(data);
        console.log(`mi nombre es ${data2.title}`);
        // fetchData(`${API}/categories/${data2?.categories?.id}`, (error3: Error, data3: any)=>{
        //     if(error3) return console.log(error3);
        //     console.log(data[0]);
        //     console.log(data2.title);
        //     console.log(data3.name);
        // })
    })
})