// Seleciona os elementos do HTML
const btnSensor = document.getElementById('btnSensor');
const resultado = document.getElementById('resultado');

// Lista de possíveis status do solo
const statusSolo = [
    {
        texto: "Status: Solo Seco! Sistema de irrigação automatizado ativado de forma inteligente. 💧",
        classe: "status-seco"
    },
    {
        texto: "Status: Umidade Ideal! Economizando água e energia. 🌾",
        classe: "status-ideal"
    }
];

// Adiciona o evento de clique no botão
btnSensor.addEventListener('click', () => {
    // Muda temporariamente para indicar que está lendo
    resultado.textContent = "Verificando umidade do solo...";
    resultado.className = "status-neutro";
    
    // Simula um delay de 800 milissegundos para a resposta do sensor parecer real
    setTimeout(() => {
        // Escolhe aleatoriamente entre seco ou ideal
        const resultadoSorteado = statusSolo[Math.floor(Math.random() * statusSolo.length)];
        
        // Atualiza a tela com o resultado
        resultado.textContent = resultadoSorteado.texto;
        resultado.className = resultadoSorteado.classe;
    }, 800);
});
