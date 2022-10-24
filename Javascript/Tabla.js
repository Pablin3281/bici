document.addEventListener("DOMContentLoaded",cargarPagina);
function cargarPagina(){
    let nav=document.querySelector("#botonMenu");
    nav.addEventListener("click",function(){
        document.querySelector("#nav").classList.toggle("mostrar");
    });
//Datos preecargados para la tabla//

let arregloBici=[];
    let bicicleta = {
        "modelo": "VENZO",
        "talle": "M",
        "sexo": "MASCULINO",
        "medida": "18\"",
        "tipo": "MOUNTANBIKE",
    }
    let bicicleta1 = {
        "modelo": "CUBE",
        "talle": "S",
        "sexo": "FEMENINO",
        "medida": "15\"",
        "tipo": "MOUNTANBIKE",
    }
    let bicicleta2 = {
        "modelo": "SCOTT",
        "talle": "XL",
        "sexo": "MASCULINO",
        "medida": "20.5\"",
        "tipo": "RUTA",
    }

    arregloBici.push(bicicleta);
    arregloBici.push(bicicleta1);
    arregloBici.push(bicicleta2);
        armarTabla();

    let formulario = document.querySelector("#Formulario");
    formulario.addEventListener("submit", agregarBicicleta);
    document.querySelector("#agregarX3").addEventListener("click",function(){

        
        let bici = {
            "modelo": "X-TERRA",
            "talle": "L",
            "sexo": "MASCULINO",
            "medida": "17.5\"",
            "tipo": "MOUNTANBIKE",
        }
        let bici1 = {
            "modelo": "TOP-MEGA",
            "talle": "M",
            "sexo": "FEMENINO",
            "medida": "17\"",
            "tipo": "MOUNTANBIKE",
        }
        let bici2 = {
            "modelo": "VITUS RAZOR",
            "talle": "XXL",
            "sexo": "MASCULINO",
            "medida": "22\"",
            "tipo": "RUTA",
        }

        arregloBici.push(bici);
        arregloBici.push(bici1);
        arregloBici.push(bici2);
        
        
    armarTabla();
    
    });
    function agregarBicicleta(event){
        event.preventDefault();
        let formBici= new FormData(formulario);

         let bicicletaAux={
            "modelo":formBici.get("modelo"),
            "talle":formBici.get("talle"),
            "sexo":formBici.get("sexo"),
            "medida":formBici.get("medida"),
            "tipo":formBici.get("tipoBicicleta"),
         }


        /*let bicicletaAux = {
            "modelo": document.querySelector("#Modelo").value,
            "talle": document.querySelector("#Talle").value,
            "sexo": document.querySelector("#Sexo").value,
            "medida": document.querySelector("#Medida").value,
            "tipo": document.querySelector("#TipoBicicleta").value,
        }*/
        arregloBici.push(bicicletaAux);
        armarTabla();
        limpiarForm();
    }
    /*recorre el arreglo y agrega los elementos*/
    function armarTabla(){
        limpiarTabla();
        for (let i=0;i<arregloBici.length;i++){
            agregarFila(arregloBici[i]);
        }
    }

    /*limpia la tabla*/
    function limpiarTabla(){
        let body=document.querySelector("#TBody");
        while (body.firstChild){
            body.removeChild(body.firstChild);
        }
    }

    /*Crea una fila y la agrega*/
    function agregarFila(bicicleta){
        let body=document.querySelector("#TBody");
        let fila=document.createElement("tr");
    
        fila.appendChild(crearColumna(bicicleta.modelo));
        body.appendChild(fila);
        fila.appendChild(crearColumna(bicicleta.sexo));
        body.appendChild(fila);
        fila.appendChild(crearColumna(bicicleta.medida));
        body.appendChild(fila);
        fila.appendChild(crearColumna(bicicleta.talle));
        body.appendChild(fila);
        fila.appendChild(crearColumna(bicicleta.tipo));
        body.appendChild(fila);
    }
    /*Crea una columna*/
    function crearColumna(elemento){
        let col=document.createElement("td");
        col.textContent=elemento;
        return col;
    }
     function limpiarForm(){
     document.querySelector("#Modelo").value="";
     document.querySelector("#Sexo").value="";
     document.querySelector("#Medida").value="";
     document.querySelector("#TipoBicicleta").value="";
     document.querySelector("#Talle").value="";
     }
     let botonBorrar=document.querySelector("#limpiar-tabla");
    botonBorrar.addEventListener("click",limpiarTabla);
    }