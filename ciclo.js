function capturar(){

    function {
        persona(nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
        }
    
    }
    let nombrecapturar = document.getElementById("nombre").value;
    let edadCapturar = document-getElementById("edad").value;

    nuevoSujeto = new persona(nombrecapturar,edadCapturar);
    console.log(nuevoSujeto);

   agregar();
}

let datos= [];
function agregar (){
    datos.push(nuevoSujeto);
    console.log(datos);
    document.getElementById("tabla").innerHTML += '<tbody> <td>Joaquin</td> <td>24</td></tbody>';
}

 
