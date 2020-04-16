/*///////////////////////////////////////*/
/*/////// ISOTOPE PROJECTS PAGINA ///////*/
/*///////////////////////////////////////*/
var $grid = $('.grid').isotope({
	itemSelector: '.afbeeldingen',
	stamp: '.stamp',
	stagger: 50,
	percentPosition: true,
	masonry: {
		columnWidth: '.afbeeldingen'
	}
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.isotope('layout');
});

// gigante
$grid.on( 'click', '.afbeeldingen', function() {
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

	$grid.isotope({ filter: filterValue });
});



/*///////////////////////////////////////*/
/*/////////////// SIDEBAR ///////////////*/
/*///////////////////////////////////////*/
var main = function () {
	"use strict";
	
	$(".logoBlackOlive").on("click", function() {
		$(".sidebarInfo").removeClass("onzichtbaar");
		$(".logoBlackOlive").addClass("onzichtbaar");
		$(".grid").addClass("gridAndSidebar")
	});
	$(".logoWhiteSmoke").on("click", function() {
		$(".sidebarInfo").addClass("onzichtbaar");
		$(".logoBlackOlive").removeClass("onzichtbaar");
		$(".grid").removeClass("gridAndSidebar")
	});
};

$(document).ready(main);


