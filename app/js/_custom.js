document.addEventListener("DOMContentLoaded", function() {

// CLIENT SLIDER START
	$('.clients-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	speed: 900,
	infinite: true,
	arrows: false,
	responsive: [
	{
		breakpoint: 1379,
		settings: {
			slidesToShow: 1
		}
	}
	]
});
// CLIENT SLIDER END

// CASE SLIDER START
	$('.cases-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	draggable: true,
	speed: 900,
	rows: 2,
	infinite: true,
	arrows: false,
	centerMode: true,
	centerPadding: '250px',
	autoplay: true,
	autoplaySpeed: 9000,
	responsive: [
	{
		breakpoint: 1379,
		settings: {
			slidesToShow: 4
		}
	}
	]
});
// CASE SLIDER END

// CASE SLIDER START
	$('.comments').slick({
	slidesToShow: 1,
	speed: 900,
	infinite: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 9000,
	responsive: [
	{
		breakpoint: 1379,
		settings: {
			slidesToShow: 4
		}
	}
	]
});
// CASE SLIDER END

});
