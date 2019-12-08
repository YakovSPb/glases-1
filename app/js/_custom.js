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
		breakpoint: 1200,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
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
	centerPadding: '150px',
	autoplay: true,
	autoplaySpeed: 9000,
	responsive: [
	{
		breakpoint: 1379,
		settings: {
			slidesToShow: 2,
			rows: 1,
			centerMode: false,
			centerPadding: '0'
		}
	},
	{
		breakpoint: 780,
		settings: {
			slidesToShow: 1,
			rows: 1,
			centerMode: false,
			centerPadding: '0'
		}
	}
	]
});
// CASE SLIDER END
// var mediaQuery = window.matchMedia("screen and (max-width: 1379x)");
// mediaQuery.addListener(reinitSlider);
// foo(mediaQuery);

// function reinitSlider(mq) {
// 	if(mq){
// 		$('.cases-slider').slick('reinit')
// 	}
// }



// CASE SLIDER START
$('.comments').slick({
	slidesToShow: 1,
	speed: 900,
	infinite: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 9000,
});
// CASE SLIDER END

// MENU START
const link = document.getElementsByClassName('gumburger')
const close = document.getElementsByClassName('menu__item--close')
const menu = document.getElementsByClassName('menu')

link[0].addEventListener('click', event => {
	event.preventDefault()
	menu[0].classList.add('menu--active')
	link[0].style.visibility = 'hidden'

})
close[0].addEventListener('click', event => {
	event.preventDefault()
	menu[0].classList.remove('menu--active')
	link[0].style.visibility = 'visible'
})
// MENU END

}) //EDN NAG
