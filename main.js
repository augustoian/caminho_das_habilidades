const desafios = [
    "Resolver um problema lógico",
    "Criar diferentes soluções",
    "Aprender novas funções",
    "Descobrir padrões",
    "Pensar em uma nova invenção"
];

function iniciarDesafio() {

    const nome = document.getElementById("nome").value;

    if (nome === "") {
        alert("Digite seu nome para começar!");
        return;
    }

    const numeros = Math.floor(Math.randon() * desafios.length);
    const desafio = desafios[numeros];

    document.getElementById("resposta").innerHTML=`
    <h2> Olá ${name}</h2>`
    `<h2> Seu Desafio é: ${desafio}</h2>`
