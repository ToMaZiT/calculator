let boton = document.querySelector('.botones');


let zero = document.querySelector('#cero');
let one = document.querySelector('#uno');
let two = document.querySelector('#dos');
let three = document.querySelector('#tres');
let four = document.querySelector('#cuatro');
let five = document.querySelector('#cinco');
let six = document.querySelector('#seis');
let seven = document.querySelector('#siete');
let eight = document.querySelector('#ocho');
let nine = document.querySelector('#nueve');
let plus = document.querySelector('#sumar');
let minus = document.querySelector('#restar');
let times = document.querySelector('#multiplicar');
let dot = document.querySelector('#restante');
let equal = document.querySelector('#igual');
let clear = document.querySelector('#borrar');

let screen = document.querySelector('#pantalla');
let amount = ' ';
let onClick = 0;

let result = 0;



//SE PUDO, todavia no se como concatenar los numeros a la par para sumarlos y eso, pero por lo menos pude obtener el valor de cada boton :D

boton.addEventListener('click', (event)=>{
    onClick = event.srcElement.innerHTML; 

   
    if (onClick === 'C') {
        // No agregar la C al amount
        return;
    }


    if (onClick === '+' || onClick === '-' || onClick === '×' || onClick === '÷') {
        firstNumber = amount;  // guarda el primer número
        operator = onClick;    // guarda el operador
        amount = '';           // limpia para escribir el segundo número
    } else if (onClick === '=') {
        secondNumber = amount;  // guarda el segundo número
        calcular();             // llama a la función para hacer la cuenta
    } else {
        amount += onClick;       // si es número o punto, sigue escribiendo
    }
    
    
    
    screen.innerHTML = amount;

});


clear.addEventListener('click', () => {
    amount = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = 0;
    screen.innerHTML = '0';
});


function calcular() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            result = num1 / num2;
            break;
    }

    screen.innerHTML = result;
    amount = result.toString();  // así podés seguir operando después
}















