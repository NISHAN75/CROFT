
document.body.style.marginBottom = document.querySelector('.footer-area').offsetHeight + 'px';
(function ($) {
"use strict";

jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.2,
});

var s = skrollr.init();
luxy.init();
$('.video-area-slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // Set your initial autoplay timeout
    dots: true,
});
$('.content-slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000, // Set your initial autoplay timeout
    dots: true,
});
$('.testimonial-slider').owlCarousel({
  loop:true,
  margin:10,
  items:1,
  nav:false,
  autoplay: true,
  autoplayTimeout: 5000, // Set your initial autoplay timeout
  dots: true,
});
$('.home-page-slider').owlCarousel({
  loop: true,
  margin: 128,
  items: 1,
  nav: true,
  navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><g id='arrow_right' transform='translate(20 27) rotate(180)'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' fill='#14758b'/></g></svg>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' transform='translate(-10 -7)' fill='#14758b'/></svg>"],
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
});
$('.single-project-slider').owlCarousel({
  loop: true,
  margin: 128,
  items: 1,
  nav: true,
  navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><g id='arrow_right' transform='translate(20 27) rotate(180)'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' fill='#14758b'/></g></svg>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' transform='translate(-10 -7)' fill='#14758b'/></svg>"],
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
});
$('.logo-slider').owlCarousel({
  loop: true,
  margin: 50,
  items: 4,
  nav: true,
  navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><g id='arrow_right' transform='translate(20 27) rotate(180)'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' fill='#14758b'/></g></svg>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' transform='translate(-10 -7)' fill='#14758b'/></svg>"],
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4,
    }
  }
});
$('.related-project-slider').owlCarousel({
  loop: true,
  margin: 18,
  items: 2,
  nav: true,
  navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><g id='arrow_right' transform='translate(20 27) rotate(180)'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' fill='#14758b'/></g></svg>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' transform='translate(-10 -7)' fill='#14758b'/></svg>"],
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
});
$('.author-project-slider').owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  nav: true,
  navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><g id='arrow_right' transform='translate(20 27) rotate(180)'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' fill='#14758b'/></g></svg>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' transform='translate(-10 -7)' fill='#14758b'/></svg>"],
  autoplay: true,
  autoplayTimeout: 5000,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3,
    }
  }
});
$('.related-artical-slider').owlCarousel({
  loop: true,
  margin: 18,
  dots: true,
  items: 3,
  dotsEach: 1, // Change this line
  nav: true,
  navText: ["<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><g id='arrow_right' transform='translate(20 27) rotate(180)'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' fill='#14758b'/></g></svg>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'><path id='Path_471' data-name='Path 471' d='M10,27,20,17,10,7Z' transform='translate(-10 -7)' fill='#14758b'/></svg>"],
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3,
    }
  }
});


$('.single-project-slider').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
  }
});
// it is nice  select call
$('select').niceSelect();



const counterUp = window.counterUp.default;

const callback = entries => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add('is-visible');
    }
  });
};

const elements = document.querySelectorAll('.count-number');

const IO = new IntersectionObserver(callback, { threshold: 1 });

elements.forEach(el => {
  IO.observe(el);
});



$(".header-area").headroom();

// active buttton
$('.team-people-button button').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});
$('.footer-main-menu-item').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

$('.team-people-button button').on('click', function() {
  // Remove active class from all tab-panes
  $('.tab-content .tab-pane').removeClass('active');



  luxy.on('scroll', function (scrollOffset) {
    // Adjust the footer position based on Luxy.js scroll position
    const footer = document.querySelector('footer');
    const translateY = Math.min(scrollOffset, 0); // Adjust as needed
    footer.style.transform = `translateY(${translateY}px)`;
  });
  // Get the target tab-pane ID from the clicked button
  var targetTabId = $(this).find('a').attr('href');

  // Add active class to the corresponding tab-pane
  $(targetTabId).addClass('active');
  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
});

// WOW active
new WOW().init();

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
})(jQuery);