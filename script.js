const menu = document.getElementById('main');
const materi = document.querySelectorAll('#judul');
const menuNavbar = document.querySelector('.menu-navbar');
const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.header');
let currentSlide = 0;

function toMenu(){
    document.documentElement.scrollTo(0, 657);
}

function nextButton(){
    let materiKini = materi[currentSlide];
    let nextMateri = materi[currentSlide+1];   

    if(currentSlide == materi.length-1){
        alert('Belum diupdate');
        return;
    }else{
        materiKini.classList.add('content-disactive-left');
        materiKini.classList.remove('content-active');
        currentSlide += 1;
        nextMateri.classList.add('content-active');
        nextMateri.classList.remove('content-disactive-right');
    }
    return console.log(nextMateri);
}

function prevButton(){
    let materiKini = materi[currentSlide];
    let prevMateri = materi[currentSlide-1];

    if(currentSlide == 0){
        alert('Ini adalah slide pertama');
        return;
    }else{
        materiKini.classList.remove('content-active');
        currentSlide -= 1;
        materiKini.classList.add('content-disactive-right');
        prevMateri.classList.add('content-active');
        prevMateri.classList.remove('content-disactive-left');
    }

    return console.log(materiKini);
}

menuNavbar.addEventListener('click', function(){
    menuNavbar.classList.toggle('menu-navbar-active');
    navbar.classList.toggle('navbar-active');
})

document.addEventListener('click', function(e){
    if(!navbar.contains(e.target) && !nav.contains(e.target)){
        navbar.classList.remove('navbar-active');
        menuNavbar.classList.remove('menu-navbar-active')
    }
})