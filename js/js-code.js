/* SWIPER PAGINA SLIDEN */
var swiperH = new Swiper('.swiper-container-h', {
	spaceBetween: 20,
	//freeMode: true,
	hashNavigation: {
		watchState: true,
	},
	grabCursor: true,
	//mousewheel: true,
	keyboard: {
		enabled: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	/*effect: 'cube',
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},*/
});
var swiperV = new Swiper('.swiper-container-v', {
	direction: 'vertical',
	spaceBetween: 5,
	//freeMode: true,
	grabCursor: true,
	mousewheel: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination-v',
		dynamicBullets: true,
		clickable: true,
	},
	/*effect: 'cube',
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},*/
});





/* PARTICLES HOME PAGINA VLIEGENDE DEELTJES */
particlesJS("particles-js", {
"particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {"value": "#53917E"},
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {"enable": false},
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 40,
        "duration": 0.4
      },
      "push": {"particles_nb": 10},
    }
  },
});





/* --- */ 





