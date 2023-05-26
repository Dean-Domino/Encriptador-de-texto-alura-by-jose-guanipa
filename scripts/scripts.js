
const textArea = document.querySelector(".textarea-encriptar");

const mensaje = document.querySelector(".textarea-encriptado");


//Eliminar caracteres especiales

function quitarAcentos(string) {
    let letraA = string.replace(/[áàäâ]/g, 'a')
    let letraE = letraA.replace(/[éèëê]/g, 'e')
    let letraI = letraE.replace(/[íìïî]/g, 'i')
    let letraO = letraI.replace(/[óòöô]/g, 'o')
    let resultado = letraO.replace(/[úùüû]/g, 'u')
    return resultado;
}
//botones

function btnEncritar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
}

function copiar() {
    mensaje.select();
    document.execCommand('copy');
}


function btnDesencritar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
}

//Encriptar

function encriptar (stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();
    stringEncriptado = quitarAcentos(stringEncriptado);

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        } 
    }
    return stringEncriptado;
}

//Desencriptar

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();
    stringDesencriptado = quitarAcentos(stringDesencriptado);
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        } 
    }
    return stringDesencriptado;
}
