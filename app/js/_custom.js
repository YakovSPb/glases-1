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
const width = window.innerWidth || document.body.clientWidth
const $slick = $('.cases-slider')

if(width < 480){
	$slick.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		speed: 900,
		rows: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 9000,
		centerMode: false,
		centerPadding: '0',
	});
} else if (width < 1370) {
		$slick.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		draggable: true,
		speed: 900,
		rows: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 9000,
		centerMode: false,
		centerPadding: '0',
	});
} else{
	$slick.slick({
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
	});
}
// CASE SLIDER END

// right-text-start
const widthRightText = document.getElementsByClassName('main__right-text')
const widthLeftText = document.getElementsByClassName('main__left-text')
widthRightText[0].style.height = width + 'px'
widthLeftText[0].style.height = width + 'px'
// right-text-end

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


// a-dvan__float-WIDTH-START
const Container = document.getElementsByClassName('container')
const widthContainer = Container[0].offsetWidth
const widthAdvanFoat = (width - widthContainer) / 2
const advanFoatElement = document.getElementsByClassName('a-dvan__float')
if(advanFoatElement[0]){advanFoatElement[0].style.width = widthAdvanFoat + 'px'}

// a-dvan__float-WIDTH-END




// aboust-comments-slider-START
$('.a-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 900,
	infinite: true,
	arrows: false,
});
// aboust-comments-slider-END


// MEDIA JAVASCRIPT START
var mediaQueryDown1200 = window.matchMedia("screen and (max-width: 1200px)");
mediaQueryDown1200.addListener(foo2);
foo2(mediaQueryDown1200);
// MEDIA JAVASCRIPT END

// MEDIA DOWN1200 START ===========================================
function foo2(mq) {
// DESTROY LINK MOBMENU START
$('.menu__link--has_sub').click(function(e){
  e.preventDefault();
});
 $('.menu__link--has_sub').click(function(){
 $(this).parent().toggleClass('active');
 });

// DESTROY LINK MOBMENU END 
}
// MEDIA DOWN1200 END ==========================================


}) //EDN TAG
