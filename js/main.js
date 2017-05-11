// Стрелка наверх

$(function() {

$(window).scroll(function() {

if($(this).scrollTop() != 0) {

$('#toTop').fadeIn();

} else {

$('#toTop').fadeOut();

}

});

$('#toTop').click(function() {

$('body,html').animate({scrollTop:0},800);

});

});

// WOW эффект

new WOW().init();

// popup windows

var card = document.getElementsByTagName('article');
var link = document.querySelectorAll(".order-button");
var c_img = document.querySelectorAll(".box-img");
var c_text = document.querySelectorAll(".box-card");
var i_name = document.getElementById('indicator-name');

var popup = document.querySelector(".popup-question");
var close = document.querySelector(".popup-question-close");
var win_popup = document.querySelector(".wrap");
var box_order = document.querySelector(".main-catalog-order");

var i = 0;
var x = 0;
var z = link.length;

for (var i = 0; i < z; i++) {
  link[i].parentNode.addEventListener('click', function(event) {
     event.preventDefault();
     var self = event.target;
     console.log(self, z);
     if(self.className != 'order-button') return;
     var n = z;
     while(n--) {
        if(link[n] == self) {
           var x = n;
           break;
        }
     }
     box_image = c_img[x].cloneNode(true);
     box_text = c_text[x].cloneNode(true);
     box_order.appendChild(box_image);
     box_order.appendChild(box_text);
     i_name.value = box_text.innerText;
     popup.classList.add("modal-content-show");
     win_popup.classList.add("modal-content-show");
  });
}

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  win_popup.classList.remove("modal-content-show");
  box_order.removeChild(box_image);
  box_order.removeChild(box_text);
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      win_popup.classList.remove("modal-content-show");
      box_order.removeChild(box_image);
      box_order.removeChild(box_text);
    }
  }
});

win_popup.addEventListener("click", function(event) {
  if (win_popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
    win_popup.classList.remove("modal-content-show");
    box_order.removeChild(box_image);
    box_order.removeChild(box_text);
  }
});
