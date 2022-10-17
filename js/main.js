jQuery(document).ready(function($) {
	$('.initactividades').slick({
    	"slidesToShow": 3 ,
    	"slidesToScroll": 3
  	});
  	$('.initgaleria').slick({
    	"slidesToShow": 2 ,
    	"slidesToScroll": 2
  	});
  	$('.inittestimonios').slick({
    	"slidesToShow": 1 ,
    	"slidesToScroll": 1,
    	dots:true,
    	arrows:false
  	});

  	
  	
  	/*$('.card-actividades').hover(
	  function() {
	    $(this).addClass('stilehover');
	  }, function() {
	    $(this).removeClass('stilehover');
	  }
	);*/
});
