// En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje

// La función deberá recibir dos parámetros:

//     time: el tiempo de espera
//     message: el mensaje que debe imprimir después del tiempo de espera

// La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.

function delay(time : number, message: string) {
    return new Promise((resolve) => {
            setTimeout(()=> resolve(message), time);
    })
  }
delay(3000, 'hola mundo').then(response=> console.log(response));