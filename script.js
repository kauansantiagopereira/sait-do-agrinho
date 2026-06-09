// Aguarda todo o HTML da página carregar antes de executar o JavaScript
document.addEventListener("DOMContentLoaded", () => {
    console.log("Arquivo script.js carregado com sucesso!");

    // Chamada das funções principais
    inicializarInteracoes();
});

/**
 * Agrupa as funções de interatividade da página
 */
function inicializarInteracoes() {
    // Exemplo 1: Exibir uma mensagem de boas-vindas no console
    boasVindas();

    // Exemplo 2: Alterar dinamicamente o texto do rodapé ou título (opcional)
    // interagirComElemento();
}

/**
 * Função simples para testar o funcionamento no console do navegador
 */
function boasVindas() {
    const horaAtual = new Date().getHours();
    let saudacao = "Olá";

    if (horaAtual < 12) {
        saudacao = "Bom dia";
    } else if (horaAtual < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    console.log(`${saudacao}! Pronto para começar a programar?`);
}

/**
 * Exemplo de como capturar e modificar um elemento do HTML
 */
function interagirComElemento() {
    // Captura o primeiro elemento <h1> da página
    const tituloPrincipal = document.querySelector("header h1");
    
    if (tituloPrincipal) {
        // Altera o texto dele via código
        tituloPrincipal.textContent = "Texto Alterado por JavaScript!";
    }
}
