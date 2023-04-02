const menu = document.getElementById("main");
const materi = document.querySelectorAll("#judul");
const menuNavbar = document.querySelector(".menu-navbar");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".header");
const menuList = document.querySelectorAll(".menu-list");
let currentSlide = 0;
document.onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == "39") {
    // Kode right arrow
    nextButton();
  } else if (e.keyCode == "37") {
    // Kode left arrow
    prevButton();
  }
}

function toMenu() {
  document.documentElement.scrollTo(0, 657);
}

function nextButton(materiKini, nextMateri) {
  materiKini = materi[currentSlide];
  if (nextMateri == undefined) {
    nextMateri = 1;
  }

  let nextLesson = materi[currentSlide + nextMateri];

  if (currentSlide == materi.length - 1) {
    alert("Belum diupdate");
    return;
  } else {
    materiKini.classList.add("content-disactive-left");
    materiKini.classList.remove("content-active");
    currentSlide += nextMateri;
    nextLesson.classList.add("content-active");
    nextLesson.classList.remove("content-disactive-right");
    nextLesson.classList.remove("content-disactive-left");
  }
}

function prevButton(materiKini, prevMateri) {
  materiKini = materi[currentSlide];
  if (prevMateri == undefined) {
    prevMateri = 1;
  }

  let prevLesson = materi[currentSlide - prevMateri];

  if (currentSlide == 0) {
    alert("Ini adalah slide pertama");
    return;
  } else {
    materiKini.classList.remove("content-active");
    materiKini.classList.add("content-disactive-right");
    currentSlide -= prevMateri;
    prevLesson.classList.add("content-active");
    prevLesson.classList.remove("content-disactive-left");
    prevLesson.classList.remove("content-disactive-right");
  }
}

menuNavbar.addEventListener("click", function () {
  menuNavbar.classList.toggle("menu-navbar-active");
  navbar.classList.toggle("navbar-active");
});

document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !nav.contains(e.target)) {
    navbar.classList.remove("navbar-active");
    menuNavbar.classList.remove("menu-navbar-active");
  }
});

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", function () {
    if (i == 1) {
      //Operations Javascript Menu List
      let operation = 3;
      if (operation <= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-right");
        materi[currentSlide].classList.remove("content-active");
      } else if (operation >= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-left");
        materi[currentSlide].classList.remove("content-active");
      }
      currentSlide = 0;
      nextButton(currentSlide, operation);
    } else if (i == 0) {
      //Variables Javascript Menu List
      let variables = 0;
      if (variables <= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-right");
        materi[currentSlide].classList.remove("content-active");
      } else if (variables >= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-left");
        materi[currentSlide].classList.remove("content-active");
      }
      currentSlide = 0;
      nextButton(currentSlide, variables);
    } else if (i == 2) {
      //Tipe Data Javascript Menu List
      let tipeData = 8;
      if (tipeData <= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-right");
        materi[currentSlide].classList.remove("content-active");
      } else if (tipeData >= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-left");
        materi[currentSlide].classList.remove("content-active");
      }
      currentSlide = 0;
      nextButton(currentSlide, tipeData);
    } else if (i == 3) {
      //Function Javascript Menu List
      let functions = 19;
      if (functions <= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-right");
        materi[currentSlide].classList.remove("content-active");
      } else if (functions >= currentSlide) {
        materi[currentSlide].classList.add("content-disactive-left");
        materi[currentSlide].classList.remove("content-active");
      }
      currentSlide = 0;
      nextButton(currentSlide, functions);
    }
  });
}
