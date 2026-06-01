// Seleciona os elementos da página HTML através do ID
const botao = document.getElementById('btnSensor');
const resultado = document.getElementById('resultado');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // Sorteia um número entre 0 e 1 para simular o sensor
    const soloSeco = Math.random() > 0.5;

    // Remove as classes antigas de status antes de aplicar a nova
    resultado.className = '';

    if (soloSeco) {
        // Altera o texto e a cor para o estado seco
        resultado.innerText = '⚠️ Solo Seco! Irrigação automática ativada.';
        resultado.classList.add('status-seco');
    } else {
        // Altera o texto e a cor para o estado úmido
        resultado.innerText = '✅ Solo Úmido! Sistema de água desligado para economizar.';
        resultado.classList.add('status-umido');
    }
});
