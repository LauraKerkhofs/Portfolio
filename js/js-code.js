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
	
	$(".logoWhiteSmoke").on("click", function() {
		$(".sidebarInfo").removeClass("onzichtbaar");
		$(".logoWhiteSmoke").addClass("onzichtbaar");
		$(".grid").addClass("gridAndSidebar")
	});
	$(".logoBlackOlive").on("click", function() {
		$(".sidebarInfo").addClass("onzichtbaar");
		$(".logoWhiteSmoke").removeClass("onzichtbaar");
		$(".grid").removeClass("gridAndSidebar")
	});
};
$(document).ready(main);



var nameArray = ["Webdesigner", "Camera Operator", "Video Editor", "Photo Manipulator", "3D Enthusiast", "Audio Cleaner", "Learner",
					 "Perfectionist",
					  "Singalong Artist", "Open Book", "Gardener", "Food Lover",
					  "King of the World", "Sunflower", "Rainbow", ""
					 ]; //One of those will be randomly chosen

var lastIndex = 0; //Used to remember the last word picked

//This function will get a random INT used later as the array index
function getRandomInt(iMin, iMax) {
    var newIndex = Math.floor(Math.random() * (iMax - iMin)) + iMin;
    while( lastIndex == newIndex ){
        var newIndex = Math.floor(Math.random() * (iMax - iMin)) + iMin;
    }
  lastIndex = newIndex;  

  return newIndex;
}

function pickRandomName() {
    var domHeaderName = document.getElementById("change"); //Put the ID of the DOM element you want to change here
    var randomIndex = getRandomInt(0, nameArray.length);

    //Put the randomly chosen name in the DOM
    domHeaderName.innerHTML = nameArray[randomIndex];
    //loop
    setTimeout(pickRandomName, 2000); //Loop every 2000ms (2s)
}

pickRandomName();

