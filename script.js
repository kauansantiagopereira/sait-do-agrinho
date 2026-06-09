// Aguarda todo o HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ROLAGEM SUAVE PARA OS LINKS DO MENU
    const linksDoMenu = document.querySelectorAll('nav a[href^="#"]');
    
    linksDoMenu.forEach(link => {
        link.addEventListener("click", function (evento) {
            evento.preventDefault(); // Impede o salto brusco padrão
            
            const idAlvo = this.getAttribute("href");
            const secaoAlvo = document.querySelector(idAlvo);
            
            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: "smooth", // Faz a rolagem ser suave
                    block: "start"      // Alinha o topo da seção no topo da tela
                });
            }
        });
    });

    // 2. MUDANÇA NO MENU AO ROLAR A PÁGINA (Efeito Fixado/Sombra)
    const menu = document.querySelector("nav");
    
    window.addEventListener("scroll", () => {
        // Se rolar mais de 50 pixels para baixo, adiciona uma classe de estilo
        if (window.scrollY > 50) {
            menu.classList.add("menu-ativo");
        } else {
            menu.classList.remove("menu-ativo");
        }
    });

    // 3. ANIMAÇÃO DE APARECIMENTO DOS CARDS (Intersection Observer)
    const cards = document.querySelectorAll(".card");
    
    // Configuração do observador: ativa quando 15% do card aparece na tela
    const observadorOpcoes = {
        threshold: 0.15
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("card-visivel");
                observador.unobserve(entrada.target); // Para de observar após animar
            }
        });
    }, observadorOpcoes);

    // Aplica o observador e uma classe inicial de esconder em cada card
    cards.forEach(card => {
        card.classList.add("card-escondido");
        observador.observe(card);
    });

});
