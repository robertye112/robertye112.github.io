import './css/modal.scss';
import './css/common.scss';

console.info("starting..");

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

$(window).scroll(function () {
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$('.carousel').carousel({
  interval: 3300
})

var modal = document.getElementById("myModal");
var btn = $("#myBtn");
var span = document.getElementById("myClose");

if (btn) {
  btn.click(function () {
    console.info("fading in");
    $("#myModal").fadeIn("slow");
  });
}


// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
