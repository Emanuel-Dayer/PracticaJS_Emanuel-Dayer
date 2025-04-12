// Actividad 1

let primerNum = 2;
let SegundoNum = 1;
SumaNum = primerNum + SegundoNum;
console.log(`${primerNum} + ${SegundoNum} es ${SumaNum}`);
console.log("---------------------------------------------------------");

// Actividad 2

let valoruno = 8;
let valordos = 3;
let valortres = 1;
let mayor = valoruno;
let menor = valoruno;

if (valordos > mayor)
{
    mayor = valordos;
}
else if (valortres > mayor)
{
    mayor = valortres;
}
if (valordos < menor)
{
    menor = valordos;
}
else if (valortres < menor)
{
    menor = valortres;
}

console.log(`Mayor: ${mayor} y Menor ${menor}`);
console.log("---------------------------------------------------------");

// Actividad 3

let palabra = "hola"
console.log(`la palabra ${palabra} tiene letras ${palabra.length}`);
console.log("---------------------------------------------------------");

// Actividad 4

let par = 0;
let impar = 0;
let Ej4Numero = 5;

Resultado = Ej4Numero % 2;

if (Resultado === 0)
{
    console.log(`El numero ${Ej4Numero} es par`);
}
else
{
    console.log(`El numero ${Ej4Numero} es impar`);
}
console.log("---------------------------------------------------------");

// Actividad 5

var palabraEj4 = "Hola"
for (var cantidad = 2; cantidad > 0; cantidad--)
{
    console.log(palabraEj4);
}
console.log("---------------------------------------------------------");

// Actividad 6

function separacion(a, b) {
    let [menor2, mayor2] = a < b ? [a, b] : [b, a]; //si a es menor que b (a < b ?), menor2 es a y mayor2 es b ([a, b]), si no (:), se invierten ([b, a])
    let numeros = "";
    for (let sepa = menor2 + 1; sepa < mayor2; sepa++)
    {
        if (sepa == mayor2 - 1) 
            {
                numeros += `y ${sepa}`;
            }
        else if (sepa == mayor2 - 2)
            {
                numeros += `${sepa} `;
            }
        else 
            {
                numeros += `${sepa}, `;
            }
    }
    return {numeros, a, b}; //a y b para poder referenciarlos fuera de la funcion
}

let resultado = separacion(5, 10);
console.log(`los numeros que separan a ${resultado.a} y ${resultado.b} son ${resultado.numeros}`);
console.log("---------------------------------------------------------");

// Actividad 7

function multiplos(a, b) {
    let [menor2, mayor2] = a < b ? [a, b] : [b, a];
    let numeros = "";
    for (let sepa = menor2 + 1; sepa < mayor2; sepa++)
    {
        if (sepa % 3 == 0) //separar los multiplos de 3
        {
            if (sepa == mayor2 - 1) 
                {
                    numeros += `y ${sepa}`;
                }
            else if (sepa == mayor2 - 2)
                {
                    numeros += `${sepa} `;
                }
            else 
                {
                    numeros += `${sepa}, `;
                }
        }
    }
    return {numeros, a, b};
}

resultado = multiplos(5, 10);
if (resultado.numeros == "")
{
    console.log(`No hay multiples de 3 entre ${resultado.a} y ${resultado.b}`);
}
else
{
    console.log(`los multiplos de 3 entre ${resultado.a} y ${resultado.b} son ${resultado.numeros}`);
}
console.log("---------------------------------------------------------");

// Actividad 8

var multiplos2y5 = 0;
var i = 0;
while (i <= 100) 
{
    if (i % 2 == 0 || i % 5 == 0)
    {
         multiplos2y5 += `${i}, `;
    }
    i++;
}

console.log(`los multiplos de 2 y 5 en 100 son ${multiplos2y5}`);

// Actividad 9

// Actividad 10

// Actividad 11

// Actividad 12

// Actividad 13

// Actividad 14

// Actividad 15

// Actividad 16