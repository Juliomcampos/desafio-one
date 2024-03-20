let textoInput = document.querySelector('.textoUsuarioBotoes__input');
let avisoFormatacao = document.querySelector('.textoUsuarioBotoes__avisoFormatacao');
let exibirCriptografado = document.querySelector('.resultadoCriptografia');
let exibirDescriptografado = document.querySelector('.resultadoCriptografia');
let botaoCriptografar = document.querySelector('.textoUsuarioBotoes__botoes__Cripto');
let botaoDescriptografar = document.querySelector('.textoUsuarioBotoes__botoes__Descripto');
let botaoCopiar = document.querySelector('.botaoCopiar');

textoInput.addEventListener('input', function () {
    const texto = textoInput.value.trim();
    let caracteresProibidos = false;

    for (let i = 0; i < texto.length; i++) {
        if (!/[a-z ]/.test(texto[i])) {
            caracteresProibidos = true;
            break; 
        }
    }

    if (caracteresProibidos) {
        avisoFormatacao.classList.add('aviso__proibido');
        avisoFormatacao.style.display = 'flex';
        botaoCriptografar.disabled = true; 
        botaoDescriptografar.disabled = true; 
    } else {
        avisoFormatacao.classList.remove('aviso__proibido');
        avisoFormatacao.style.display = 'none'; 
        botaoCriptografar.disabled = false; 
        botaoDescriptografar.disabled = false; 
    }
});

function inputCriptografada() {
    let textoCriptografado = criptografar(textoInput.value);
    exibirCriptografado.innerText = textoCriptografado;
    botaoCriptografar.disabled = true;
    botaoDescriptografar.disabled = true;
    botaoCopiar.style.display = 'flex';
    document.querySelector('.resultado').classList.add('resultado__exibido');
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringCriptografada = stringCriptografada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replace(new RegExp(matrizCodigo[i][0], 'g'), matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function inputDescriptografada() {
    let textoDescriptografado = descriptografar(textoInput.value);
    exibirDescriptografado.innerText = textoDescriptografado;
    botaoCriptografar.disabled = true;
    botaoDescriptografar.disabled = true;
    botaoCopiar.style.display = 'flex';
    document.querySelector('.resultado').classList.add('resultado__exibido');
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDescriptografada = stringDescriptografada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replace(new RegExp(matrizCodigo[i][1], 'g'), matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

function copiarTexto() {
    let textoCopiado = exibirCriptografado.innerText;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            botaoCopiar.disabled = true;
            textoInput.value = '';
        })
}

