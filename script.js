// 1. Seleção dos elementos do DOM
const modal = document.getElementById("modalSustentabilidade");
const btnSaibaMais = document.getElementById("btnSaibaMais");
const btnFechar = document.querySelector(".fechar");

// 2. Funções de controle do Modal
const abrirModal = () => {
    modal.classList.add("ativo"); // Adiciona a classe que mostra o modal
    modal.setAttribute("aria-hidden", "false");
    btnFechar.focus(); // Foca no botão de fechar para ajudar a acessibilidade
};

const fecharModal = () => {
    modal.classList.remove("ativo"); // Remove a classe e esconde o modal
    modal.setAttribute("aria-hidden", "true");
    btnSaibaMais.focus(); // Devolve o foco para o botão que abriu o modal
};

// 3. Ouvintes de Eventos (Event Listeners)
btnSaibaMais.addEventListener("click", abrirModal);
btnFechar.addEventListener("click", fecharModal);

// Fecha o modal ao clicar fora da caixinha branca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});

// Acessibilidade: Fecha o modal ao apertar a tecla 'Escape' (Esc)
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("ativo")) {
        fecharModal();
    }
});
