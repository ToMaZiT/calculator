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
let amount = 0;


//SE PUDO, todavia no se como concatenar los numeros a la par para sumarlos y eso, pero por lo menos pude obtener el valor de cada boton :D

boton.addEventListener('click', (event)=>{
    console.log(event.srcElement.innerText);

    amount = event.srcElement.innerText;
    screen.innerHTML = amount;
});









