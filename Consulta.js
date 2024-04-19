class Consulta{
    NombrePaciente;
    FolioPaciente;
    MedicoT;
    MedicinaR;
    Sintomas;
    Diagnostico;
    Paciente;
    /**
     * 
     * @param {String} NombrePaciente 
     * @param {Int} FolioPaciente 
     * @param {String} MedicoT 
     * @param {String} MedicinaR 
     */
    constructor(NombrePaciente,FolioPaciente,MedicoT,MedicinaR,Sintomas,Diagnostico){
        this.NombrePaciente = NombrePaciente;
        this.FolioPaciente= FolioPaciente;
        this.MedicoT = MedicoT;
        this.MedicinaR = MedicinaR;
        this.Sintomas = Sintomas;
        this.Diagnostico = Diagnostico;
     
    }

    asignarPaciente = function(Paciente){
      this.Paciente = Paciente;
    }

}


