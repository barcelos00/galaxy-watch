function mudarCor(cor, botao) {
    // Atualizar a imagem com transição suave
    const watchImage = document.getElementById('watchImage');
    
    // Adicionar classe de transição
    watchImage.style.opacity = '0.7';
    
    setTimeout(() => {
        watchImage.src = 'imagens/' + cor + '.jpg';
        watchImage.style.opacity = '1';
    }, 150);
    
    // Atualizar o botão ativo
    const botoes = document.querySelectorAll('.color-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    botao.classList.add('active');
}

// Definir o primeiro botão como ativo ao carregar
document.addEventListener('DOMContentLoaded', function() {
    const primeiroBtn = document.querySelector('.color-btn');
    primeiroBtn.classList.add('active');
    
    // Adicionar transição suave à imagem
    const watchImage = document.getElementById('watchImage');
    watchImage.style.transition = 'opacity 0.3s ease';
});
