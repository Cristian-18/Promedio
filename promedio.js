

function calcularPromedio (lista){
   /*  let sumaLista=0;
    for (i=0;i<lista.length;i++){
        sumaLista = sumaLista + lista[i];
    } */

    const sumarLista = lista.reduce(
        function (valorAcumulado=0,nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    )

    const promedio = sumarLista/lista.length;

    return promedio;

}

