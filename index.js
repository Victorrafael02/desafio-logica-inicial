// Declarar a variavel de nome e expDoPersonagemeriencia do meu personagem

let nomeDoPersonagem = "Apollo"
let xpDoPersonagem = 6984

//variavel para guardar o nivel de personagem

let nivel;
if (xpDoPersonagem < 1000) {
    nivel = "Ferro";
} else if (xpDoPersonagem >= 1001 && xpDoPersonagem <= 2000) {
    nivel = "Bronze"
} else if (xpDoPersonagem >= 2001 && xpDoPersonagem <= 5000) {
    nivel = "Prata"
} else if (xpDoPersonagem >= 5001 && xpDoPersonagem <= 7000) {
    nivel = "Ouro"
} else if (xpDoPersonagem >= 7001 && xpDoPersonagem <= 8000) {
    nivel = "Platina"
} else if (xpDoPersonagem >= 8001 && xpDoPersonagem <= 9000) {
    nivel = "Ascendente"
} else if (xpDoPersonagem >= 9001 && xpDoPersonagem <= 1000) {
    nivel = "Imortal"
} else if (xpDoPersonagem <= 10001) {
    nivel = "Radiante"
}

// mensagem de exibição do meu personagem

console.log("O Herói de nome " + nomeDoPersonagem + " está no nível de " + xpDoPersonagem)