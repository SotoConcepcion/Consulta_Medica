
/**
 * 
 * @param {String} parametro 
 * @param {Array} dato 
 */
function agregarLocalStorage(parametro, dato) {
  localStorage.setItem(parametro, JSON.stringify(dato));
}

function sacarLocalStorage(parametro) {
  return JSON.parse(localStorage.getItem(parametro));
}

function getUsersFromLocalStorage() {
  let pacientes = [];
  let arrayPacientes = sacarLocalStorage('Paciente');
  if (arrayPacientes != null) {
    if (arrayPacientes.length != 0) {
      arrayPacientes.forEach(pacientearray => {
        let paciente2 = new Paciente(pacientearray.Nombre, pacientearray.ApellidoP, pacientearray.ApellidoM, pacientearray.Direccion, pacientearray.Cp, pacientearray.Telefono, pacientearray.FechaNac, pacientearray.FolioPaciente);
        pacientes.push(paciente2);
      });
    }
  }
  return pacientes;
}

function getMedicsFromLocalStorage() {
  let medic = [];
  let arrayMedicos = sacarLocalStorage('Medicos');
  if (arrayMedicos != null) {
    if (arrayMedicos.length != 0) {
      arrayMedicos.forEach(medicarray => {
        let medicosa = new Medico(medicarray.Nombre, medicarray.ApellidoP, medicarray.ApellidoM, medicarray.Direccion, medicarray.Cp, medicarray.Telefono, medicarray.FechaNac, medicarray.Cedula);
        medic.push(medicosa);
      });
    }
  }
  return medic;
}
