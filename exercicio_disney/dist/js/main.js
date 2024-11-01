const heroSection = document.querySelector('.hero');
const alturaHeight = heroSection.clientHeight;

window.addEventListener('scroll', function() {
const posicaoAtual = window.scrollY;

if (posicaoAtual < alturaHeight) {
    ocultaElementos();
}else{
    mostraElementos();
}
});
function ocultaElementos(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
  }
  function mostraElementos(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
  }
