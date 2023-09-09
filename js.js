const hidenMenu = document.getElementById("nav1"); // Obtém a barra de navegação pelo ID
const botao = document.querySelector(".menu-button"); // Obtém o botão de menu pelo seletor
let menuon = false; // Variável para rastrear o estado do menu

botao.addEventListener('click', function() {
    if (menuon) {
        hidenMenu.style.right = '-70%'; // Define o valor para esconder o menu (deslocamento para a direita)
        menuon = false; // Atualiza o estado do menu para "desligado"
    } else {
        hidenMenu.style.right = '0'; // Define o valor para mostrar o menu (coloca-o na posição inicial)
        menuon = true; // Atualiza o estado do menu para "ligado"
    }
});
