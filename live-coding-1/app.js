const palabra = document.getElementById("palabra");
const listaMayores = document.getElementById("palabrasMayores");
const listaPalabras = document.getElementById("listaPalabras");
const agregar = document.getElementById("agregar");

const myArray = [
    "Insecto",
    "Bootcamp",
    "Mangos",
    "Reptil",
    "Mosca",
    "escritorio",
];

const bigWords = (palabra, listaPalabras) => {
    console.log(palabra.length);
    listaPalabras.forEach((element) => {
        if (element.length > palabra.length) {
            agregarADoomPalabraMayor(element);
        }
    });
    printArray(listaPalabras);
};

function agregarADoomPalabraMayor(palabra){
    const li = document.createElement("li");
    li.textContent = palabra;
    listaMayores.appendChild(li);
}


function agregarADoomListaPalabras(palabra){
    const li = document.createElement("li");
    li.textContent = palabra;
    listaPalabras.appendChild(li);
}

agregar.addEventListener("click", () => {
    console.log(palabra.value);
    bigWords(palabra.value, myArray);
});

function printArray(myArray) {
    myArray.forEach((element) => {
        console.log(element);
        agregarADoomListaPalabras(element);
    })
}