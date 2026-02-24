//Gera número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

//Define número máximo de tentativas
let maxTentativas = 10;
let tentativasRestantes = maxTentativas;

//Mostra tentativas iniciais
document.getElementById("tentativas").textContent = "Tentativas restantes: " + tentativasRestantes;

function chutar() {

    let palpite = parseInt(document.getElementById("palpite").value);

    //Validação
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById("mensagem").textContent = "Digite um número válido entre 1 e 100!";
        return;
    }

    //Diminui tentativas
    tentativasRestantes--;

    //Comparação
    if (palpite === numeroSecreto) {
        document.getElementById("mensagem").textContent = "Você Acertou!";

    }
    else if (palpite < numeroSecreto) {
        document.getElementById("mensagem").textContent = "O número secreto é maior!";

    }
    else if (palpite > numeroSecreto) {
        document.getElementById("mensagem").textContent = "O número secreto é menor!"

    }

    //Se tentativas acabarem e usuário não acertar 
    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        document.getElementById("mensagem").textContent = "Você perdeu! O número secreto era " + numeroSecreto;

    } 

    //Atualiza tentativas na tela
    document.getElementById("tentativas").textContent = "Tentativas Restantes: " + tentativasRestantes;
}

function resetarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1 ;

    tentativasRestantes = maxTentativas;

    document.getElementById("mensagem").textContent = "";

    document.getElementById("tentativas").textContent = "Tentativas Restantes: " + tentativasRestantes;

    document.getElementById("palpite").value = "";
}