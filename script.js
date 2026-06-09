// 1. Seleciona os elementos do HTML que vamos usar
const modal = document.getElementById("modalSustentabilidade");
const btnSaibaMais = document.getElementById("btnSaibaMais");
const btnFechar = document.querySelector(".fechar");

// 2. Função para abrir o modal
btnSaibaMais.addEventListener("click", () => {
    modal.style.display = "block"; // Mostra o modal na tela
    modal.setAttribute("aria-hidden", "false"); // Atualiza a acessibilidade
});

// 3. Função para fechar o modal ao clicar no 'X'
btnFechar.addEventListener("click", () => {
    modal.style.display = "none"; // Esconde o modal
    modal.setAttribute("aria-hidden", "true"); // Atualiza a acessibilidade
});

// 4. Bônus: Fecha o modal se o usuário clicar em qualquer lugar fora da caixinha branca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }
});
