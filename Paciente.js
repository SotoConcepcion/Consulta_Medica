class Paciente extends Persona {
    IdPaciente;
    FolioPaciente;
    Consulta = [];
    /**
     * @param {String} FolioPaciente 
     */
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono, FechaNac, FolioPaciente) {
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono, FechaNac);
        this.IdPaciente = this.generador();
        this.FolioPaciente = FolioPaciente;
    }

    agregarConsulta = function (consulta) {
        let consultas = this.Consulta;
        consultas.push(consulta);
    }

    datosPaciente = function () {
        return `ID:${this.IdPaciente} Nombre Completo:${this.Nombre} ${this.ApellidoP} ${this.ApellidoM} Folio:${this.FolioPaciente}`;
    }

    generador() {
        let id;
        id = Math.floor(Math.random() * 500) + 1;
        return id;
    }


} 
