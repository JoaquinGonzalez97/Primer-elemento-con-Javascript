const container = document.querySelector('.container');

container.addEventListener("mouseenter" , () =>{
    console.log(1);
}) 




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
    document.getElementById("tabla").innerHTML += '<tbody> <td>'+nuevoSujeto.nombre+'</td> <td>'+nuevoSujeto.edad+'</td></tbody>';
}



