(()=>{
    function* foo(index: number) {
        while (index < 2) {
          yield index;
          index++;
        }
      }
      function* far(){
        yield ['a','b','c']
      }
      function fibonachi(){
          let valorActual = 1
          let valorAnterior = valorActual
          for (let index = 0; index < 10; index++) {
              valorActual += valorAnterior
              valorAnterior = valorActual - 1
              console.log(valorActual);
        }
      }

      function* Fibonacci(n: number){
        let num = [0,1];
        while(num[0] <= n){
            num[0] + num[1];
            yield num[0];
            num = [num[1], num[0]+num[1]];
        }
    }

    function factorial(n:number):number{
        if(n == 0) return 1
        return n * factorial(n-1);
    }
    // let fibo = Fibonacci(13);
    // console.log(fibo.next());
      
    //   const iterator = foo(0);
      
    //   console.log(far().next().value);
    //   // Expected output: 0
      
    //   console.log(far().next().value);
    //   // Expected output: 1
    //   fibonachi() 

// EJERCICIOS FUNCIONES RECURSIVAS 
// FROM: https://aulaenlanube.com/zona-programacion/java/ejercicios-recursividad-java/
    // Crea un método que obtenga la suma de los números naturales desde 1 hasta N. Se debe pasar como parámetro el número N
    function calcN(n: number): number{
        if(n <= 1) return 1;
        return n  + calcN(n -1);
    }
    //   console.log(factorial(10));
    // console.log(calcN(4));
    
    // Crea un método que imprima los dígitos desde 1 hasta N. Se debe pasar como parámetro el número N
    function printdigits(n:number){
        if(n == 0) return console.log(1);
        console.log(printdigits( n -1));
        return n
    }
    // console.log(printdigits(5));

    // Crea un método que imprima los dígitos desde N hasta 1. Se debe pasar como parámetro el número N
    function printdigitsTo1(n: number){
        if(n == n) return n ;
        n -= n;
        console.log(printdigitsTo1(n + 1));
        return n
    }
    // printdigitsTo1(6);
})()
