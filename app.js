const btn = document.querySelector('.button');
const entrada = document.querySelector('.filter');
let caja = document.querySelector('.grafic');

function MostrarData(data, input) {
    //CANTIDAD DE OBJECTOS CON EL MISMO DEPARTAMENTO
    let obj_departamento = data.filter(obj => obj && obj.NOMBDEP == input);
    
    //NOMBRES DE PROVINCIAS POR DEPARTAMENTO
    let provincias = obj_departamento.map(obj => obj.NOMBPROV);
    let names_provincias = new Set(provincias);

    //CANTIDAD DE DISTRITOS POR DEPARTAMENTO
    let countDistritos = obj_departamento.length;

    console.log(`Departamento: ${input} Provincias: ${Array.from(names_provincias)} Distritos: ${countDistritos}`);
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
//    }