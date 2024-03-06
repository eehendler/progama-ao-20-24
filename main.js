const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for (let i=0; i < botoes.length; i++) {
console.log(i);
}
for (let i=0;i<botoes.length;i++) {
botoes[i].onclick = function() {
    for (let j=0;j<botoes.length;j++) {
        botoes[j].classlist.remove("ativo");
    }
    botoes[i].classList.add("ativo");
}

}
const textos = document.querySelectorAll(".aba-conteudo");
textos[i].classList.add("ativo");
textos[j].classList.remove("ativo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date()
contadores[0].textContent = tempoObjetivo1;
contadores[0].textContent = "Contagem regressiva";

