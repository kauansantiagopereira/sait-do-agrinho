/**
 * Projeto Agrinho 2026
 * Sistema de Monitoramento Agrícola Automatizado
 * Gerenciamento de sensores e tomadas de decisão.
 */

// --- CONFIGURAÇÕES DO SISTEMA ---
const CONFIG = {
    CONEXAO_OK: true,
    INTERVALO_ATUALIZACAO: 3000, // 3 segundos
    LIMITES: {
        UMIDADE_MINIMA: 40,      // Em porcentagem
        TEMPERATURA_MAXIMA: 35   // Em graus Celsius
    }
};

// --- FUNÇÕES DE SIMULAÇÃO DE SENSORES ---
function obterLeituraUmidade() {
    return Math.floor(Math.random() * (80 - 20 + 1)) + 20;
}

function obterLeituraTemperatura() {
    return Math.floor(Math.random() * (38 - 18 + 1)) + 18;
}

// --- LOGICA DE TOMADA DE DECISÃO ---
/**
 * Determina o status da irrigação com base na umidade atual
 */
function controlarIrrigacao(umidade) {
    const statusBomba = document.getElementById('status-bomba');
    if (!statusBomba) return;

    if (umidade < CONFIG.LIMITES.UMIDADE_MINIMA) {
        statusBomba.innerText = "Ligada 💧 (Solo Seco)";
        statusBomba.style.color = "#d32f2f"; // Vermelho / Alerta
    } else {
        statusBomba.innerText = "Desligada ✅";
        statusBomba.style.color = "#2e7d32"; // Verde / Estável
    }
}

/**
 * Alerta visual caso a temperatura passe do limite crítico
 */
function verificarAlertaTemperatura(temperatura) {
    const elementoTemp = document.getElementById('temperatura');
    if (!elementoTemp) return;

    if (temperatura > CONFIG.LIMITES.TEMPERATURA_MAXIMA) {
        elementoTemp.style.color = "#ff9100"; // Laranja / Calor excessivo
        elementoTemp.innerText = `${temperatura}°C ⚠️`;
    } else {
        elementoTemp.style.color = ""; // Cor padrão do CSS
        elementoTemp.innerText = `${temperatura}°C`;
    }
}

// --- FUNÇÕES DE ATUALIZAÇÃO DA INTERFACE (DOM) ---
/**
 * Atualiza os elementos visuais do HTML com os novos dados recebidos
 */
function atualizarPainel() {
    // Se a conexão falhar, exibe o aviso nos cards
    if (!CONFIG.CONEXAO_OK) {
        console.error("Erro: Não foi possível conectar aos sensores.");
        
        const campos = ['umidade', 'temperatura', 'status-bomba'];
        campos.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.innerText = "Erro ❌";
                elemento.style.color = "#ff0000";
            }
        });
        return;
    }

    // 1. Coleta os dados dos "sensores"
    const umidadeAtual = obterLeituraUmidade();
    const temperaturaAtual = obterLeituraTemperatura();

    // 2. Atualiza a interface de texto básica
    const elementoUmidade = document.getElementById('umidade');
    if (elementoUmidade) {
        elementoUmidade.innerText = `${umidadeAtual}%`;
    }

    // 3. Executa as regras de negócio automáticas
    verificarAlertaTemperatura(temperaturaAtual);
    controlarIrrigacao(umidadeAtual);
}

// --- INICIALIZAÇÃO DO SISTEMA ---
// Executa uma vez ao carregar a página para não começar em branco
document.addEventListener("DOMContentLoaded", () => {
    atualizarPainel();
    // Define o loop de atualização contínua
    setInterval(atualizarPainel, CONFIG.INTERVALO_ATUALIZACAO);
});
