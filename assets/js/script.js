let totalSlides = document.querySelectorAll('.banner .slide').length;
// console.log(`Quantidade de slides: ${totalSlides}`);
let currentSlide = 0;
document.querySelector(".banner .sliders").style.width = `calc(100vw * ${totalSlides})`;

function updateMargin() {
  let sliderItemWidth = document.querySelector('.banner .slide').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector(".banner .sliders").style.marginLeft = `-${newMargin}px`;
}
function backSlide() {
  currentSlide--;
  // console.log(currentSlide);
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
    
  }
  pointer();
  updateMargin();
}

function nextSlide() {
  currentSlide++;
  // console.log(currentSlide);
  if (currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  pointer();
  updateMargin();
}

function pointer() {
  if (currentSlide == 3 || currentSlide == 0) {
    document.querySelectorAll('.banner .pointer')[0].classList.add('selected');
    document.querySelectorAll('.banner .pointer')[1].classList.remove('selected')
    document.querySelectorAll('.banner .pointer')[2].classList.remove('selected')
  } 
  if (currentSlide == 1) {
    document.querySelectorAll('.banner .pointer')[1].classList.add('selected');
    document.querySelectorAll('.banner .pointer')[0].classList.remove('selected')
    document.querySelectorAll('.banner .pointer')[2].classList.remove('selected')
  }
  if (currentSlide == 2) {
    document.querySelectorAll('.banner .pointer')[2].classList.add('selected');
    document.querySelectorAll('.banner .pointer')[0].classList.remove('selected')
    document.querySelectorAll('.banner .pointer')[1].classList.remove('selected')
  }
}
setInterval(nextSlide,3000);

function upscreen() {
  window.scrollTo({
      top:0,
      behavior: 'smooth'
  });
}
function scrollbutton() {
  if(window.scrollY === 0) {
      //ocultar botão
      document.querySelector('.up').style.display = 'none';
  } else {
      //mostrar botão
      document.querySelector('.up').style.display = 'block';
  }
}
window.addEventListener('scroll',scrollbutton);

// MENU MOBILE

const btnMenu = document.querySelector('.btn-menu');
function toggleMenu () {
    const navMenu = document.querySelector('.menu');
    navMenu.classList.toggle('active');
}
btnMenu.addEventListener('click', toggleMenu);
