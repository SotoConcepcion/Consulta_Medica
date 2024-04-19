var pacientes = [];
var medicos = [];
datosPacientes();
function guardarPaciente() {
    let Nombre = document.getElementById("Nombre").value;
    let ApellidoP = document.getElementById("ApellidoP").value;
    let ApellidoM = document.getElementById("ApellidoM").value;
    let Direccion = document.getElementById("Direccion").value;
    let Cp = document.getElementById("Cp").value;
    let Telefono = document.getElementById("Telefono").value;
    let FechaNac = document.getElementById("FechaNac").value;
    let FolioPaciente = document.getElementById("FolioPaciente").value;
    let pa1 = new Paciente(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono, FechaNac, FolioPaciente);
    pacientes.push(pa1);
    agregarLocalStorage('Paciente', pacientes);
    alert("Guardado");
    datosPacientes()
}
function datosPacientes() {
    var mostrarPaciente = getUsersFromLocalStorage();
    if (mostrarPaciente) {
        pacientes = mostrarPaciente;
        let text = '';
        for (let i = 0; i < pacientes.length; i++) {
            text += `
         <tr>
         <td scope="row">${pacientes[i].IdPaciente}</td>
         <td>${pacientes[i].Nombre + " " + pacientes[i].ApellidoP + " " + pacientes[i].ApellidoM}</td>
         <td>${pacientes[i].FolioPaciente}</td>
         </tr>`;
        }
        document.getElementById('cuerpo-tabla-pacientes').innerHTML = text;
    } else {
        document.getElementById('cuerpo-tabla-pacientes').innerHTML = 'No hay datos guardados';
    }


}

function guardarMedico() {
    let Nombre = document.getElementById("NombreMed").value;
    let ApellidoP = document.getElementById("ApellidoPMed").value;
    let ApellidoM = document.getElementById("ApellidoMMed").value;
    let Direccion = document.getElementById("DireccionMed").value;
    let Cp = document.getElementById("CpMed").value;
    let Telefono = document.getElementById("TelefonoMed").value;
    let FechaNac = document.getElementById("FechaNacMed").value;
    let Cedula = document.getElementById("CedulaMed").value;
    let med = new Medico(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono, FechaNac, Cedula);
    medicos.push(med);
    agregarLocalStorage("Medicos", medicos);
    alert("Guardado");
    mostrarMedico();
}

function mostrarMedico() {
    var medicosGuardados = getMedicsFromLocalStorage();
    if (medicosGuardados) {
        medicos = (medicosGuardados);
        let text = '';
        for (let i = 0; i < medicos.length; i++) {
            text += `<tr>
            <td scope="row">${medicos[i].IdMedico}</td>
            <td>${medicos[i].Nombre + " " + medicos[i].ApellidoP + " " + medicos[i].ApellidoM}</td>
            <td>${medicos[i].Telefono}</td>
            <td>${medicos[i].Cedula}</td>
            </tr>`;
        }
        document.getElementById('cuerpo-tabla-medicos').innerHTML = text;
    } else {
        document.getElementById('cuerpo-tabla-medicos').innerHTML = 'No hay datos guardados';
    }
}

var consulta = [];
function asignarPaciente() {
    this.NombrePaciente = document.getElementById("NombrePaciente").value;
    return this.NombrePaciente;
}

function asignarMedico() {
    this.MedicoT = document.getElementById("MedicoTurno").value;
    return this.MedicoT;
}

function agregarConsulta() {
    let Folio = document.getElementById("FolioPacienteC").value;
    let MedicinaR = document.getElementById("MedicinaR").value;
    let Diagnostico = document.getElementById("Diagnostico").value;
    let Sintomas = document.getElementById("Sintomas").value;

    // ENCONTRAR AL PACIENTE
    let result = pacientes.findIndex(({ FolioPaciente }) => FolioPaciente === Folio);
    if (result > -1) {

        let con = new Consulta(asignarPaciente(), Folio, asignarMedico(), MedicinaR, Sintomas, Diagnostico);
        consulta.push(con);
        agregarLocalStorage("Consulta", consulta);

        let paciente = pacientes.find(({ FolioPaciente }) => FolioPaciente === Folio);

        pacientes[result].agregarConsulta(consulta);
        paciente.agregarConsulta(consulta);

        alert("Consulta Agregada");
    } else {
        alert('No se encontrol al paciente');
    }
    mostrarConsultas();
}

function mostrarConsultas() {
    var consultasGuardadas = sacarLocalStorage("Consulta");
    if (consultasGuardadas) {
        consulta = consultasGuardadas;
        let resultado = '';
        for (let i = 0; i < consulta.length; i++) {
            resultado += `<tr>
      <td scope="row">${consulta[i].NombrePaciente}</td>
      <td>${consulta[i].FolioPaciente}</td>
      <td>${consulta[i].MedicoT}</td>
      <td>${consulta[i].MedicinaR}</td>
      <td>${consulta[i].Sintomas}</td>
      <td>${consulta[i].Diagnostico}</td>
      </tr>`
        }
        document.getElementById('cuerpo-tabla-consultas').innerHTML = resultado;
    } else {
        document.getElementById('cuerpo-tabla-consultas').innerHTML = 'No hay consultas guardadas.';
    }
}

function todo() {
    datosPacientes();
    mostrarMedico();
    mostrarConsultas();
}