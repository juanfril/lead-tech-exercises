Promise.resolve(4) // Primero se resulve una promesa con valor 4
  .then((x) => {
    throw new Error('oops') // Una vez resulta, se lanza un error
  })
  .catch(() => 5) // Por lo tanto el error es recogido por el catch que setea el valor a 5
  .then((x) => x * 2) // Despues se le pasa al siguiente then el valor 5 como 'x' y lo multiplica por 2, ahora el valor es 10
  .catch(() => 15) // Al no haber error en el anterior then, este catch no hace nada
  .then((x) => x - 3) // Despues se le resta al valor 3, con lo que su valor ahora es 7
  .then((x) => console.log(x)) // Despues se logea el valor, que sigue siendo 7
  .catch(console.error) // Al no haber error en el then, este console.error no va a hacer nada
