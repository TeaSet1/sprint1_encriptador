
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
    document.getElementById("output").style.display="none";
    document.getElementById("munheco").style.display="block";
    document.getElementById("output-text-box").style.display="flex";
};

function transform(entrada, salida){

    var inputText = document.getElementById("input-text");
    
    var buffer = inputText.value;

    for (let index = 0; index < vocales.length; index++) {

        buffer = buffer.replaceAll(entrada[index], salida[index]); 
    }
    
    document.getElementById("munheco").style.display="none";
    document.getElementById("output-text-box").style.display="none";
    document.getElementById("output").style.display="flex";

    outputTextBox.innerText = buffer;

    inputText.value = "";
}
