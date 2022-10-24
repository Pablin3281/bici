document.addEventListener("DOMContentLoaded",cargarPagina);
//Sirve para ocultar la barra de navegacion//
function cargarPagina(){
    let nav=document.querySelector("#botonMenu");
    nav.addEventListener("click",function(){
        document.querySelector("#nav").classList.toggle("mostrar");
    });
let valorCaptcha= "";
let BotonEnviar=document.querySelector("#BotonEnviar");
let BotonReset=document.querySelector("#BotonReset");
function generarTextoAleatorio(cantLetras){
    let letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cadena='';
    for (let i=0;i<cantLetras;i++){
        let numero=Math.floor(Math.random()*(letras.length-0)+0);
        cadena=cadena+letras[numero];
    }
    return cadena;
}
function cargarCaptcha(){
    let parrafo=document.querySelector("#captcha");
    let palabra=generarTextoAleatorio(5);
    valorCaptcha=palabra;
    parrafo.innerHTML=palabra;
}
function comprobarCaptcha(evento){
    evento.preventDefault();
    let captchaIngresado=document.querySelector("#ingresaCaptcha");
    let captcha=document.querySelector("#captcha");
    let captchaValido=document.querySelector("#captchaValido");
    if(valorCaptcha==captchaIngresado.value){
        captchaValido.innerHTML="el captcha es correcto";
    limpiarcampo();
    cargarCaptcha();
    }
    else{
    captchaValido.innerHTML="el captcha es incorrecto";
   cargarCaptcha();
   document.querySelector("#ingresaCaptcha").value="";
    }
  
}
function limpiarcampo(){
    document.querySelector("#InputNombre").value="";
    document.querySelector("#InputMail").value="";
    document.querySelector("#InputTelefono").value="";
    document.querySelector("#InputMensaje").value="";

}
function Reset (){
    cargarCaptcha();
}

    BotonEnviar.addEventListener("click",comprobarCaptcha);
    BotonReset.addEventListener("click",Reset);
    window.addEventListener("load",cargarCaptcha);
}


