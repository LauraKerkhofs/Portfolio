/*///////////////////////////////////////*/
/*//////// SWIPER PAGINA SLIDEN /////////*/
/*///////////////////////////////////////*/
var swiperH = new Swiper('.swiper-container-h', {
	spaceBetween: 20,
	hashNavigation: {
		watchState: true,
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
var swiperV = new Swiper('.swiper-container-v', {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 5,
	freeMode: true,
	grabCursor: true,
	mousewheel: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	keyboard: {
		enabled: true,
	}
});










/*///////////////////////////////////////*/
/*//////// PARTICLES HOME PAGINA ////////*/
/*///////////////////////////////////////*/
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 40,
			"density": {
				"enable": true,
				"value_area": 400
			}
		},
		"color": {"value": "#64b29a"},
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





/*///////////////////////////////////////*/
/*/////// ISOTOPE PROJECTS PAGINA ///////*/
/*///////////////////////////////////////*/
var $grid = $('.grid').isotope({
	itemSelector: '.afbeeldingen',
	stamp: '.stamp',
	stagger: 50,
	percentPosition: true,
	masonry: {
		columnWidth: '.grid-sizer'
		//columnWidth: 100
	}
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.isotope('layout');
});

// gigante
$grid.on( 'click', '.afbeeldingen', function() {
	// change size of item by toggling gigante class
	$( ".gigainfo" ).addClass('onzichtbaar')
	$( this ).toggleClass('gigante');
	if ($( ".afbeeldingen" ).hasClass('gigante')) {
		$( ".gigante>.foto>.gigainfo" ).removeClass('onzichtbaar')
	} else {
		$( ".gigainfo" ).addClass('onzichtbaar')
	}
$grid.isotope('layout');
});

// bind filter button click
$filters = $('#filters').on( 'click', 'button', function() {
  var $this = $( this );
  var filterValue;
  if ( $this.is('.is-checked') ) {
    // uncheck
    filterValue = '*';
  } else {
    filterValue = $this.attr('data-filter');
    $filters.find('.is-checked').removeClass('is-checked');
  }
  $this.toggleClass('is-checked');

  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});








