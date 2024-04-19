class Medicina {
    NombreMedicina;
    Proveedor;
    
    constructor(NombreMedicina,Proveedor) {
        this.NombreMedicina = NombreMedicina;
        this.Proveedor = Proveedor;
    }
}
var medicamento = [];
function agregarMedicina(){
    this.NombreMedicina = document.getElementById("Medicina").value;
    this.Proveedor = document.getElementById("Proveedor").value;
    let medi = new Medicina(NombreMedicina,Proveedor);
    medicamento.push(medi);
agregarLocalStorage("Medicina",JSON.stringify(medicamento));
alert("Consulta Agregada");
} 
    function mostrarMedicinas(){
        var medic = sacarLocalStorage("Medicina");
        if (medic) {
          medicamento = JSON.parse(medic );
          let resultado = '';
          for(let i = 0; i < medicamento.length; i++) {
            resultado+= `<tr>
            <td scope="row">${medicamento[i].NombreMedicina}</td>
            <td>${medicamento[i].Proveedor}</td>
            </tr>`
          }
          document.getElementById('cuerpo-tabla-medicina').innerHTML = resultado;
        } else {
          document.getElementById('cuerpo-tabla-medicina').innerHTML = 'No hay consultas guardadas.';
        }
        alert("Mostrando");
      }



  