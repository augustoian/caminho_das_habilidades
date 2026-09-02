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
