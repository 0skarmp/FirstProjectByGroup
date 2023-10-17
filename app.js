const btn = document.querySelector('.button');
const entrada = document.querySelector('.filter');

let caja = document.querySelector('.grafic');

var provincias = [];
var distritos = [];

function MostrarData(data, input) {
    let obj_departamento = data.filter(obj => obj && obj.NOMBDEP == input);
    let districtsPerProvince = {};
    //Cuenta distritos y provincia
    obj_departamento.forEach(obj => {
        const province = obj.NOMBPROV;
        if (districtsPerProvince[province]) {
            districtsPerProvince[province] += 1;
        } else {
            districtsPerProvince[province] = 1;
        }
    });
    //Muestra la suma de los distritos por provincia
    for (const province in districtsPerProvince){
        provincias.push(`${province}`)
        distritos.push(`${districtsPerProvince[province]}`)
    }

    console.log(provincias);

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: provincias,
            datasets: [{
                label: 'Distritos',
                data: distritos,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
        }
    });
}

btn.addEventListener('click', () => {
    const input = entrada.value.toUpperCase();
    // Realizar la solicitud usando fetch
    fetch("https://raw.githubusercontent.com/0skarmp/FirstProjectByGroup/main/UBIGEO.json")
    .then(res => res.json())
    .then(data => MostrarData(data, input))
    .catch(error => console.log(error));
});

reload = document.querySelector('.reload')
reload.addEventListener("click", (_) => {
    location.reload();
});