// Pegando os elementos do HTML
const modal = document.getElementById("modalSustentabilidade");
const btn = document.getElementById("btnSaibaMais");
const spanFechar = document.getElementsByClassName("fechar")[0];

// Abre o modal ao clicar no botão
btn.onclick = function() {
    modal.style.display = "block";
}

// Fecha o modal ao clicar no (X)
spanFechar.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar em qualquer lugar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
