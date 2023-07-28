const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        // If = Somente para celular 
        if(window.innerWidth < 450) {
            window.scrollTo({
                top: 0, behavior: 'smooth'
            });
        }


        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');


        const personagemGrande = document.querySelector('.personagemGrande');
        const idPersonagem = personagem.attributes.id.value;        
        personagemGrande.src = `./assets/img/card-${idPersonagem}.png`;


        const nomePersonagens = document.getElementById('nomePersonagem');        
        nomePersonagens.innerText = personagem.getAttribute('data-name');

        const desPersonagens = document.getElementById('descricaoPersonagem');
        desPersonagens.innerText = personagem.getAttribute('data-description');          
    })    
});