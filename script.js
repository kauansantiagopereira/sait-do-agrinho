/**
 * Projeto Agrinho 2026
 * Sistema de Monitoramento Agrícola Automatizado
 * * Este script gerencia a atualização dos dados dos sensores na tela
 * e simula as tomadas de decisão da automação.
 */

// --- CONFIGURAÇÕES DO SISTEMA ---
const CONFIG = {
    CONEXAO_OK: true,
    INTERVALO_ATUALIZACAO: 3000, // Tempo em milissegundos (3 segundos)
    LIMITES: {
        UMIDADE_MINIMA: 40,      // Em porcentagem
        TEMPERATURA_MAXIMA: 35   // Em graus Celsius
    }
};

// --- FUNÇÕES DE SIMULAÇÃO DE SENSORES ---
/**
 * Gera um valor simulado de umidade entre 20% e 80%
 */
function obterLeituraUmidade() {
    return Math.floor(Math.random() * (80 - 20 + 1)) + 20;
}

/**
 * Gera um valor simulado de temperatura entre 18°C e 38°C
 */
function obterLeituraTemperatura() {
    return Math.floor(Math.random() * (38 - 18 + 1)) + 18;
}

// --- FUNÇÕES DE ATUALIZAÇÃO DA INTERFACE (DOM) ---
/**
 * Atualiza os elementos visuais do HTML com os novos dados recebidos
 */
function atualizarPainel() {
    if (!CONFIG.CONEXAO_OK) {
        console.error("Erro: Não foi possível conectar aos sensores.");
        return;
