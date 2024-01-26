// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const button = document.getElementById("button");
const respuesta = document.getElementById("answer");
const input = document.getElementById("Input");

async function generateAnswer() {
    try{
        const answer = await fetch(API_ENDPOINT);
        console.log(answer);
        const data = answer.json();
        console.log(data);
        console.log(data.answer);
        data.then(datos=> {
            respuesta.style.backgroundImage = datos.image
        });
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click',()=> {
    console.log('holi'); 
    generateAnswer();
});

function handleKeyEnter(e) { 
    if (e.length > e) {
        button.disabled = false;
    }
}

input.addEventListener('input', e => {
    if (e.length > 0) {
    }
});