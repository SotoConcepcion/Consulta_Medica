class Medico extends Persona{
    IdMedico;
    Cedula;
    Consulta = [];
    /**
     * @param {Int} IdMedico 
     * @param {Int} Cedula 
     */
  
    constructor(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaN,Cedula){
        super(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaN);
        this.IdMedico = this.generador();
        this.Cedula = Cedula;
    }

    generador(){
        let id;
        id = Math.floor(Math.random() * 500) + 1;
        return id;
    }

}



