// OBTENDO OS BOTÕES
const button_idioma = document.getElementsByClassName('buttonLanguage')[0];
const list_idioma = document.getElementsByClassName('idiomass')[0];
// MUADANDO OS DISPLAY DA LISTA DE IDIOMAS
button_idioma.addEventListener('click', function () {
    list_idioma.style.display = "block";
});
// OBTENDO OS BOTÕES DE IDIOMAS
const ingles = document.querySelector('.ingles');
const espanhol = document.querySelector('.espanhol');
const pt_pt = document.querySelector('.pt-pt');
const pt_br = document.querySelector('.pt-br');


// MODIFICANDO O IDIOMA PARA INGLÊS
ingles.addEventListener('click', function () {
    list_idioma.style.display = "none";
    
    document.getElementById('inicio').innerText = 'start';
    document.getElementById('idioma-usado').innerText = 'Inglês';
    document.getElementById('buscar').innerText = 'search';
    document.getElementById('sua_bliblioteca').innerText = 'your library';
    document.getElementsByClassName('text1')[0].innerText = 'Create your first playlist';
    document.getElementsByClassName('text2')[0].innerText = "It's easy, we will help you";
    document.getElementById('create_playlist').innerText = 'Create playlist';
    document.getElementById('cookies').innerText = 'Cookies';
    document.getElementsByClassName('inscreva-se')[0].innerText = 'sign up';
    document.getElementsByClassName('enter')[0].innerText = 'Enter';
    document.getElementById('search-input').placeholder = 'what do you want to hear';
    document.getElementsByClassName('session')[0].innerText = ' Browse all sections';
    document.getElementById('boas-festas').innerText = 'Browse all sections';
    document.getElementById('feitos-para-vc').innerText = 'Made for you';
    document.getElementById('lancamentos').innerText = 'Releases';
    document.getElementById('creators').innerText = 'Creators';
    document.getElementById('treino').innerText = 'To train';
    document.getElementById('podcasts').innerText =  'Podcasts';
    document.getElementById('sertanejo').innerText = 'Countryside';
    document.getElementById('samba_pagode').innerText = 'Samba and Pagode';
    document.getElementById('funk').innerText = 'Funk';
    document.getElementById('mpb').innerText = 'MPB';
    document.getElementById('rock').innerText = 'Rock';
    document.getElementById('hip-hop').innerText = 'Hip-Hop';
    document.getElementById('indie').innerText = 'Indie';
    document.getElementById('relax').innerText = 'Relax';
    document.getElementById('musica-latina').innerText = 'Latin music';
    document.getElementsByClassName('disclaimer-premium__title')[0].innerText = 'TRY PREMIUM FOR FREE';
    document.getElementsByClassName('disclaimer-premium__subtitle')[0].innerText = 'Sign up to enjoy unlimited music and podcasts with just a few ads. No credit card required.';
    document.getElementById('button-increva-se').innerText = 'Sign up for free';

})
// MODIFICANDO O IDIOMA PARA ESPANHOL
espanhol.addEventListener('click', function () {

    list_idioma.style.display = "none";

    document.getElementById('inicio').innerText = 'comienzo';
    document.getElementById('idioma-usado').innerText = 'Español';
    document.getElementById('search-input').placeholder = '¿Qué quieres escuchar?';
    document.getElementById('buscar').innerText = 'Buscar';
    document.getElementById('sua_bliblioteca').innerText = 'Tu biblioteca';
    document.getElementsByClassName('text1')[0].innerText = 'Crea tu primera lista de reproducción';
    document.getElementsByClassName('text2')[0].innerText = 'Es fácil, te ayudaremos';
    document.getElementById('create_playlist').innerText = 'Crear lista de reproducción';
    document.getElementById('cookies').innerText = 'Cookies';
    document.getElementsByClassName('inscreva-se')[0].innerText = 'Registrarse';
    document.getElementsByClassName('enter')[0].innerText = 'Entrar';
    document.getElementsByClassName('session')[0].innerText = 'Explorar todas las secciones';
    document.getElementById('boas-festas').innerText = 'Melodías festivas';
    document.getElementById('feitos-para-vc').innerText = 'Hecho para ti';
    document.getElementById('lancamentos').innerText = 'Nuevos lanzamientos';
    document.getElementById('creators').innerText = 'Creadores';
    document.getElementById('treino').innerText = 'Entrenamiento';
    document.getElementById('podcasts').innerText =  'Podcasts';
    document.getElementById('sertanejo').innerText = 'Música sertaneja';
    document.getElementById('samba_pagode').innerText = 'Samba y Pagode';
    document.getElementById('funk').innerText = 'Funk';
    document.getElementById('mpb').innerText = 'MPB';
    document.getElementById('rock').innerText = 'Rock';
    document.getElementById('hip-hop').innerText = 'Hip Hop';
    document.getElementById('indie').innerText = 'Indie';
    document.getElementById('relax').innerText = 'Relax';
    document.getElementById('musica-latina').innerText = 'Música Latina';
    document.getElementsByClassName('disclaimer-premium__title')[0].innerText = 'PRUEBA PREMIUM GRATIS';
    document.getElementsByClassName('disclaimer-premium__subtitle')[0].innerText = 'Regístrate para disfrutar de música ilimitada y podcasts con solo unos pocos anuncios. No se requiere tarjeta de crédito.';
    document.getElementById('button-increva-se').innerText = 'Regístrate gratis';

})
// MODIFICANDO O IDIOMA PARA PORTUGUÊS DE PORTUGAL
pt_pt.addEventListener('click', function () {

    list_idioma.style.display = "none";

    document.getElementById('inicio').innerText = 'Início';
    document.getElementById('idioma-usado').innerText = 'Português de Portugal';
    document.getElementById('search-input').placeholder = 'O que queres ouvir?';
    document.getElementById('buscar').innerText = 'Buscar';
    document.getElementById('sua_bliblioteca').innerText = 'A tua biblioteca';
    document.getElementsByClassName('text1')[0].innerText = 'Cria a tua primeira lista de reprodução';
    document.getElementsByClassName('text2')[0].innerText = 'É fácil, vamos ajudar-te';
    document.getElementById('create_playlist').innerText = 'Criar lista de reprodução';
    document.getElementById('cookies').innerText = 'Cookies';
    document.getElementsByClassName('inscreva-se')[0].innerText = 'Registar';
    document.getElementsByClassName('enter')[0].innerText = 'Entrar';
    document.getElementsByClassName('session')[0].innerText = 'Explorar todas as secções';
    document.getElementById('boas-festas').innerText = 'Boas festas';
    document.getElementById('feitos-para-vc').innerText = 'Feito para ti';
    document.getElementById('lancamentos').innerText = 'Lançamentos';
    document.getElementById('creators').innerText = 'Criadores';
    document.getElementById('treino').innerText = 'Para treinar';
    document.getElementById('podcasts').innerText =  'Podcasts';
    document.getElementById('sertanejo').innerText = 'Sertanejo';
    document.getElementById('samba_pagode').innerText = 'Samba e pagode';
    document.getElementById('funk').innerText = 'Funk';
    document.getElementById('mpb').innerText = 'MPB';
    document.getElementById('rock').innerText = 'Rock';
    document.getElementById('hip-hop').innerText = 'Hip Hop';
    document.getElementById('indie').innerText = 'Indie';
    document.getElementById('relax').innerText = 'Relaxa';
    document.getElementById('musica-latina').innerText = 'Música Latina';
    document.getElementsByClassName('disclaimer-premium__title')[0].innerText = 'Experimenta o Premium gratuitamente';
    document.getElementsByClassName('disclaimer-premium__subtitle')[0].innerText = 'Regista-te para desfrutar de música e podcasts ilimitados com apenas alguns anúncios. Não é necessário cartão de crédito.';
    document.getElementById('button-increva-se').innerText = 'Registar grátis';

})
// MODIFICANDO O IDIOMA PARA PORTUGUÊS DO BRASIL
pt_br.addEventListener('click', function () {

    list_idioma.style.display = "none";

    document.getElementById('inicio').innerText = 'Início';
    document.getElementById('idioma-usado').innerText = 'Português do Brasil';
    document.getElementById('search-input').placeholder = 'O que você quer ouvir?';
    document.getElementById('buscar').innerText = 'Buscar';
    document.getElementById('sua_bliblioteca').innerText = 'Sua biblioteca';
    document.getElementsByClassName('text1')[0].innerText = 'Crie sua primeira playlist';
    document.getElementsByClassName('text2')[0].innerText = 'É fácil, vamos te ajudar';
    document.getElementById('create_playlist').innerText = 'Criar playlist';
    document.getElementById('cookies').innerText = 'Cookies';
    document.getElementsByClassName('inscreva-se')[0].innerText = 'Inscreva-se';
    document.getElementsByClassName('enter')[0].innerText = 'Entrar';
    document.getElementsByClassName('session')[0].innerText = 'Navegar por todas as seções';
    document.getElementById('boas-festas').innerText = 'Boas festas';
    document.getElementById('feitos-para-vc').innerText = 'Feitos para você';
    document.getElementById('lancamentos').innerText = 'Lançamentos';
    document.getElementById('creators').innerText = 'Criadores';
    document.getElementById('treino').innerText = 'Para treinar';
    document.getElementById('podcasts').innerText = 'Podcasts';
    document.getElementById('sertanejo').innerText = 'Sertanejo';
    document.getElementById('samba_pagode').innerText = 'Samba e pagode';
    document.getElementById('funk').innerText = 'Funk';
    document.getElementById('mpb').innerText = 'MPB';
    document.getElementById('rock').innerText = 'Rock';
    document.getElementById('hip-hop').innerText = 'Hip Hop';
    document.getElementById('indie').innerText = 'Indie';
    document.getElementById('relax').innerText = 'Relax';
    document.getElementById('musica-latina').innerText = 'Música Latina';
    document.getElementsByClassName('disclaimer-premium__title')[0].innerText = 'Testar o Premium de graça';
    document.getElementsByClassName('disclaimer-premium__subtitle')[0].innerText = 'Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.';
    document.getElementById('button-increva-se').innerText = 'Inscreva-se grátis';

})