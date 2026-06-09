// Pegando os elementos do HTML
const modal = document.getElementById("modalSustentabilidade");
const btnSaibaMais = document.getElementById("btnSaibaMais");
const botaoFechar = document.querySelector(".fechar");

// Função para abrir o modal (muda o display de 'none' para 'flex')
btnSaibaMais.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Função para fechar o modal ao clicar no (X)
botaoFechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Função para fechar o modal se o usuário clicar em qualquer lugar fora da caixinha branca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
