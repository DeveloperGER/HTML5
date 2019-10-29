$(document).ready(function() {

	var scrollorama = $.scrollorama({ blocks:'.scrollBlock' });
	setTimeout(() => {
		$('.bienvenida').removeClass("animated fadeIn");
		$('.avatar').removeClass("animated fadeIn");
	}, 1000);
	scrollorama
		.animate('.bienvenida',{ duration: 300, property:'bottom', end: -100 })
		.animate('.bienvenida',{ duration: 300, property:'opacity', start: 1, end: 0 })
		.animate('.avatar',{ duration: 300, property:'opacity', start: 1, end: 0 })
		.animate('.down-arrow',{ duration: 300, property:'bottom', end: -100 })
		.animate('.trabajemosCaja',{ delay: 50, duration: 300, property:'zoom', start: 0.8, end: 1 })
		.animate('.trabajemosCaja',{ delay: 50, duration: 300, property:'opacity', start: 0, end: 1 })
		.animate('.mistrabajos',{ delay: 50, duration: 400, property:'bottom', start: -200, end: 0 })
		.animate('.mistrabajos',{ delay: 50, duration: 500, property:'opacity', start: 0, end: 1 })
		.animate('.disenadorA',{ delay: 0, duration: 300, property:'top', start: 1000, end: 0 })
		.animate('.desarrolladorA',{ delay: 20, duration: 320, property:'top', start: 1000, end: 0 })
		.animate('.mitrabajoreciente',{ duration: 400, property:'opacity', start: 0, end: 1 })
		.animate('.mitrabajoreciente',{ delay: 50, duration: 400, property:'top', start: -220, end: 0 });

	$(".down-arrow").on('click', function() {
		var position = $(".acerca h2").offset().top;
		$("html, body").animate({ scrollTop: position }, 1000);
	});
});
$({property: 0}).animate({property: 100}, {
    duration: 2000,
    step: function() {
        var _percent = Math.round(this.property);
        $('.topper').css('width',  _percent+"%");
    }
});