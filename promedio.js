
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado*lado;
}

function calcularPerimetro(){
    const entrada = document.getElementById("lado-cuadrado");
    const value = entrada.value;

    const resultado = perimetroCuadrado(value);
    alert(resultado);
}

function calcularArea (){
    const ingLado= document.getElementById("lado-cuadrado");
    const valor =ingLado.value;

    result = areaCuadrado(valor);
    alert (result);
}

/* function calcularPromedio (lista){
    let sumaLista=0;
    for (i=0;i<lista.length;i++){
        sumaLista = sumaLista + lista[i];
    }

  ===========================================
    const sumarLista = lista.reduce(
        function (valorAcumulado=0,nuevoValor){
            return valorAcumulado + nuevoValor;
            
        }
        =============================================
     
        

    console.log("El lado de mi cuadrado mide:" + lista);
    const promedio = sumarLista/lista.length;

    return promedio;

} */

