
function open_form_asesoria(){
	$('.btn-reserva-form').removeClass('activ-form');
	$('.btn-asesoria-form').addClass('activ-form');

	$('.box-form-reserva').fadeOut(600,function(){
		$('.box-form-asesoria').fadeIn(600);
	})
}

function open_form_reserva(){
	$('.btn-asesoria-form').removeClass('activ-form');
	$('.btn-reserva-form').addClass('activ-form');

	$('.box-form-asesoria').fadeOut(600,function(){
		$('.box-form-reserva').fadeIn(600);
	})
}

jQuery(document).ready(function($) {
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top -70
	        }, 1000);
	        //target.addClass('active');
	        //console.log(target);
	        return false;
	      }
	    }
	});



	
	$('.initactividades').slick({
    	"slidesToShow": 3 ,
    	"slidesToScroll": 3,
    	responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      },
	    }
	  ],
  	});
  	$('.initgaleria').slick({
    	"slidesToShow": 2 ,
    	"slidesToScroll": 2,
    	responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      },
	    }
	  ],
  	});
  	$('.inittestimonios').slick({
    	"slidesToShow": 1 ,
    	"slidesToScroll": 1,
    	dots:true,
    	arrows:false
  	});

  	$('.btn-asesoria-form').click(function(event) {
  		open_form_asesoria();
  	});
  	$('.btn-reserva-form').click(function(event) {
  		open_form_reserva()
  	});

  	
  	
  	/*$('.card-actividades').hover(
	  function() {
	    $(this).addClass('stilehover');
	  }, function() {
	    $(this).removeClass('stilehover');
	  }
	);*/
});
