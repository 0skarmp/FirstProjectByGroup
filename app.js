const btn = document.querySelector('.button');
const entrada = document.querySelector('.filter');
let caja = document.querySelector('.grafic');

function MostrarData(data, input) {

    let obj_departamento = data.filter(obj => obj && obj.NOMBDEP == input);
    
    let districtsPerProvince = {};

    //  cuenta distritos y provincia
    obj_departamento.forEach(obj => {
        const province = obj.NOMBPROV;
        if (districtsPerProvince[province]) {
            districtsPerProvince[province] += 1;
        } else {
            districtsPerProvince[province] = 1;
        }
    });

    console.log(`Departamento: ${input}`);

    // muetsra la suma de los distritos por provincia
    for (const province in districtsPerProvince) {
        console.log(`Provincia: ${province}, Cantidad de Distritos: ${districtsPerProvince[province]}`);
    }
}

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
