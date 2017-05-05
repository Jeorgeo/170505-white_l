var mcheck = document.getElementsByClassName('slider-check'),
    slide_next = document.getElementsByClassName('')//чекбоксы слайдов
    i = 0; // Индекс текущего слайда.

//debugger;

var slideInterval = setInterval(nextSlide,2000);
var currentSlide = 0;

slide_next.addEventListener('click', moveNext);

function nextSlide() {
  mcheck[currentSlide].removeAttribute('checked');
  currentSlide = (currentSlide+1)%mcheck.length;
  mcheck[currentSlide].setAttribute('checked', 'true');
}
