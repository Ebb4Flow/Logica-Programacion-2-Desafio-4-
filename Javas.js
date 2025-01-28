//1.- Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2.- Crea una lista de lenguajes de programación llamada 
// "lenguagesDeProgramacion con los siguientes elementos: '
// JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
// 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

console.log(`3.- ${lenguagesDeProgramacion}`);

//4.- Crea una función que muestre en la consola 
// todos los elementos de la lista "lenguagesDeProgramacion.

function LenPro(){
    console.log('\n 4.- Los elementos son: \n');
    let MAx = lenguagesDeProgramacion.length;
    for(let i = 0; i<MAx; i++){
        console.log(`${lenguagesDeProgramacion[i]}`);
    }
}
LenPro();

//5.- Crea una función que muestre en la consola todos 
// los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function LenProInverso(){
    console.log('\n 5.- Los elementos en orden inverso son: \n');
    let MAx = lenguagesDeProgramacion.length;
    for(let i = MAx -1; i>= 0; i--){
        console.log(`${lenguagesDeProgramacion[i]}`);
    }
}
LenProInverso();

//6.- Crea una función que calcule el promedio de los elementos en una lista de números.

let numerospromedio = [1,2,3,4,5];

function promedio(){
    let Sum = 0;
    let MAx = numerospromedio.length;
    for(let i = 0; i<MAx; i++){
        Sum = Sum + numerospromedio[i];
    }
    let Promedio = Sum / MAx; 
    console.log(`6.- El promedio de la lista es: ${Promedio}`);
}
promedio();

//7.- Crea una función que muestre en la consola el número 
// más grande y el número más pequeño en una lista.

function NumGraPeq(){
    let Maximo = Math.max(...numerospromedio);
    let Minimo = Math.min(...numerospromedio);

    console.log(`7.- El número más grande es: ${Maximo}`);
    console.log(`   El número más pequeño es: ${Minimo}`);
}
NumGraPeq();

//8.- Crea una función que devuelva la suma de todos los elementos en una lista.

function SumaTotal(){
    let Sum = 0;
    let MAx = numerospromedio.length;
    for(let i = 0; i<MAx; i++){
        Sum = Sum + numerospromedio[i];
    }
    console.log (`8.- La suma de todos los elementos es: ${Sum}`)
}
SumaTotal();

//9.- Crea una función que devuelva la posición en la lista donde 
// se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function Busqueda(posición){
    let MAx = numerospromedio.length;
    for(let i = 0; i<MAx; i++){
        if (posición === i){
            console.log(`9.- El elemento N°${posición} es: ${numerospromedio[i]}`);
        }
    }
}
Busqueda(2);

//10.- Crea una función que reciba dos listas de números del mismo tamaño 
// y devuelva una nueva lista con la suma de los elementos uno a uno.

function SumaLista(Lista1, Lista2){
    let ListaNueva = [];
    let Max1 = Lista1.length;
    let Max2 = Lista2.length;
    if(Max1 == Max2){
        for(i = 0; i < Max1; i++){
            let Additions = Lista1[i] + Lista2[i];
            ListaNueva.push(Additions);
        }
    }

    console.log(`10.- La lista nueva es:${ListaNueva}`);
}
ListaZ = [2,3,4,5,6];
Lista9 = [1,2,3,4,5];
SumaLista(ListaZ, Lista9);

//11.- Crea una función que reciba una lista de números y 
// devuelva una nueva lista con el cuadrado de cada número.

function ListaCuadrada(ListaRecibida){
    let ListaNueva = [];
    let Max = ListaRecibida.length;
    for (i = 0; i < Max; i++){
        let Cuadrados = ListaRecibida[i] * ListaRecibida[i];
        ListaNueva.push(Cuadrados);
    }
    console.log(`11.- La lista al cuadrado es:${ListaNueva}`);
}
ListaC = [2,3,4,5,6,7];
ListaCuadrada(ListaC);