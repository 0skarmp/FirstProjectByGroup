const btn = document.querySelector('.button');
const entrada = document.querySelector('.filter');
let caja = document.querySelector('.grafic');

function MostrarData(data, input) {
    let distritos = data.filter(obj => obj && obj.NOMBDEP == input);
    let count = distritos.length;
    console.log(`Departamento: ${input}, cantidad de Distritos: ${count}`);
};

btn.addEventListener('click', () => {
    const input = entrada.value.toUpperCase();
    
    // Realizar la solicitud usando fetch
    fetch("https://raw.githubusercontent.com/0skarmp/FirstProjectByGroup/main/UBIGEO.json")
    .then(res => res.json())
    .then(data => MostrarData(data, input))
    .catch(error => console.log(error));
});

// {
//     "IDDIST": "010101",
//     "NOMBDEP": "AMAZONAS",
//     "NOMBPROV": "CHACHAPOYAS",
//     "NOMBDIST": "CHACHAPOYAS",
//     "NOM_CAPITAL (LEGAL)": "CHACHAPOYAS",
//     "COD_ REG_NAT": 2,
//     "REGION NATURAL": "SIERRA"
//    },