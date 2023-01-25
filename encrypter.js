
var keys = ["enter", "imes", "ai", "ober", "ufat"];
var vocales = ["e", "i", "a", "o", "u"];

//llamamos a todos los objetos. su valor lo seleccionaremos luego.
var outputTextBox = document.getElementById("output-text");

var encryptButton = document.getElementById("b-encriptar");
encryptButton.onclick = function(){         //Usaremos funciones anónimas para reducir el tamaño del código y poder establecer argumentos.
    transform(vocales, keys);
};

var decryptButton = document.getElementById("b-desencriptar");
decryptButton.onclick = function(){
    transform(keys, vocales);
};

var copyButton = document.getElementById("b-copiar");

copyButton.onclick = function(){

    navigator.clipboard.writeText(outputTextBox.innerText); //innerText y no value por ser un <p>.
    
    document.getElementById("output").style.display= "none";

    document.getElementById("output-text-box").style.opacity = 0;
    document.getElementById("output-text-box").style.display= "flex";
    
    document.getElementById("copied-message").style.display = "block";
    setTimeout(function(){
        document.getElementById("copied-message").style.display = "none"
        if (window.matchMedia('(min-width: 1280px)').matches) {
            document.getElementById("munheco").style.display= "block";
        }else{
            document.getElementById("munheco").style.display= "none";
        }
        document.getElementById("output-text-box").style.opacity = 1;
    }, 1200);
};

window.addEventListener("resize", function(){
    if(window.matchMedia("(max-width: 1280px)").matches){
        document.getElementById("munheco").style.display = "none";
    }else{
        document.getElementById("munheco").style.display = "block";
    }
})

function transform(entrada, salida){

    var inputText = document.getElementById("input-text");
    
    var buffer = inputText.value; //El buffer nos permite almacenar los cambios de cada iteración for.

    for (let index = 0; index < vocales.length; index++) {

        buffer = buffer.replaceAll(entrada[index], salida[index]); 
    }
    
    document.getElementById("munheco").style.display="none";
    document.getElementById("output-text-box").style.display="none";
    document.getElementById("output").style.display="flex";

    outputTextBox.innerText = buffer;

    inputText.value = "";
}