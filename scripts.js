// criando variaveis para armazenar os elementos

let x = document.querySelector(".x");
let o = document.querySelector(".O");
let caixas = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#botoes_jogo button");
let mensagem = document.querySelector("#mensagem");
let textoMensagem = document.querySelector("#mensagem p");
let Ai;

// contador de jogadas dos jogadores

let jogador1 = 0;
let jogador2 = 0;

// adiciando eventos click aos box

for (let i = 0; i < caixas.length; i++) {

    //quando clicar na caixa
    caixas[i].addEventListener("click", function () {

        let el = checarJogada(jogador1, jogador2);

        if (this.childNodes.length == 0) {
            let cloneel = el.cloneNode(true);

            this.appendChild(cloneel);


            // computar jogada
            if (jogador1 == jogador2) {
                jogador1++;
            }
            else {
                jogador2++;
            }

            // checar vencedor
            condicaoVitoria();

        }
    });
}

function checarJogada(jogador1, jogador2) {
    if (jogador1 == jogador2) {
        el = x;
    }

    else {
        el = o;
    }
    return el;
}

function condicaoVitoria() {

    let b1 = document.getElementById("bloco1");
    let b2 = document.getElementById("bloco2");
    let b3 = document.getElementById("bloco3");
    let b4 = document.getElementById("bloco4");
    let b5 = document.getElementById("bloco5");
    let b6 = document.getElementById("bloco6");
    let b7 = document.getElementById("bloco7");
    let b8 = document.getElementById("bloco8");
    let b9 = document.getElementById("bloco9");


    // condição de vitoria horizontal

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == "x" && b2child == "x" && b3child == "x") {
            declararVencedor("x");

        } else if (b1child == "O" && b2child == "O" && b3child == "O") {
            declararVencedor("O");
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == "x" && b5child == "x" && b6child == "x") {
            declararVencedor("x");

        } else if (b4child == "O" && b5child == "O" && b6child == "O") {
            declararVencedor("O");
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == "x" && b8child == "x" && b9child == "x") {
            declararVencedor("x");

        } else if (b7child == "O" && b8child == "O" && b9child == "O") {
            declararVencedor("O");
        }
    }

    // condição de vitoria vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == "x" && b4child == "x" && b7child == "x") {
            declararVencedor("x");

        } else if (b1child == "O" && b4child == "O" && b7child == "O") {
            declararVencedor("O");
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b2child == "x" && b5child == "x" && b8child == "x") {
            declararVencedor("x");
        } else if (b2child == "O" && b5child == "O" && b8child == "O") {
            declararVencedor("O");
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b3child == "x" && b6child == "x" && b9child == "x") {
            declararVencedor("x");

        } else if (b3child == "O" && b6child == "O" && b9child == "O") {
            declararVencedor("O");
        }
    }

    // comdição de vitoria diagonais

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == "x" && b5child == "x" && b9child == "x") {
            declararVencedor("x");

        } else if (b1child == "O" && b5child == "O" && b9child == "O") {
            declararVencedor("O");
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b3child == "x" && b5child == "x" && b7child == "x") {
            declararVencedor("x");

        } else if (b3child == "O" && b5child == "O" && b7child == "O") {
            declararVencedor("O");
        }
    }

    // condição para dar velha

    let contador = 0;

    for (let i = 0; i < caixas.length; i++) {

        if (caixas[i].childNodes[0] != undefined) {
            contador++;
        }
    }
    if (contador == 9) {
        declararVencedor("deu velha");
    }
}

// DECLARANDO VENCEDOR

function declararVencedor(vencedor) {

    let placarx = document.querySelector("#placar1");
    let placaro = document.querySelector("#placar2");
    let msg = "";

    if (vencedor == "x") {
        placarx.textContent = parseInt(placarx.textContent) + 1
        msg = "O Jogador 1 Venceu!"
    } else if (vencedor == "O") {
        placaro.textContent = parseInt(placaro.textContent) + 1
        msg = "O Jogador 2 Venceu!"
    }
    else {
        msg = "Deu Velha!";
    }

    // mensagem na tela

    textoMensagem.innerHTML = msg;
    mensagem.classList.remove("hide");

// limpar mensagem

    setTimeout(function(){
        mensagem.classList.add("hide");
    },2000);

// zerar jogadas

    jogador1 = 0;
    jogador2 = 0;

// limpar caixa

    let limparCaixa = document.querySelectorAll(".box div");

    for( let i=0; i < limparCaixa.length;i++){

        limparCaixa[i].parentNode.removeChild(limparCaixa[i]);
    }

}