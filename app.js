const btn = document.querySelector('.button');
const entrada = document.querySelector('.filter');
const caja = document.querySelector('.grafic');

function MostrarData(data,departament) {
    // let departaments = data.filter(dep => dep.NOMBDEP === departament);
    // caja.innerHTML = "";
    console.log(data, departament);  
}

btn.addEventListener('click', () => {
    const val = entrada.value;
    
    // Realizar la solicitud usando fetch
    fetch("https://raw.githubusercontent.com/0skarmp/FirstProjectByGroup/main/UBIGEO.json")
    .then(res => res.json())
    .then(data => MostrarData(data, val))
    .catch(error => console.log(error));
});

const dpto = document.querySelector('input').innerHTML;
const btn = document.querySelector("button").addEventListener('click', functionName);