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

link[0].addEventListener('click', function(event) {
	event.preventDefault()
	menu[0].classList.add('menu--active')
	link[0].style.visibility = 'hidden'

})
close[0].addEventListener('click', function(event) {
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
	if(advanFoatElement[1]){advanFoatElement[1].style.width = widthAdvanFoat + 'px'}
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
var mediaQueryDown580 = window.matchMedia("screen and (max-width: 580px)");
mediaQueryDown1200.addListener(foo2);
foo2(mediaQueryDown1200)

// mediaQueryDown580.addListener(foo580);
// foo580(mediaQueryDown580);
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

// QUESTIONG FAQ START
$('.f-quest__list li').click(function(){
	if($(this).children('ul').is(':hidden')){
		$(this).children('ul').slideDown('slow');
		$(this).toggleClass('active')
	} else {
		$(this).children('ul').slideUp('slow');
		$(this).toggleClass('active')
	}
});
// QUESTIONG FAQ END

// fabrication SLIDER START
if(width < 576){
	$('.f-scope__galery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 900,
		infinite: true,
		arrows: false,
	});
}
//
// fabrication SLIDER START
if(width < 576){
	$('.f-mayby__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 900,
		infinite: true,
		arrows: false,
	});
}
// fabrication SLIDER END





// PRODUCTION CASES SPOILER START
const blockSpeed = 1000;

const blockHeight = $('.d-cases-slider').height();
$('.d-cases-slider').css('height','690');



$('.d-cases__btn').click(function(){
	$('.d-cases-slider').animate({height:blockHeight}, blockSpeed);
	$(this).css('display', 'none')
	$('.d-cases__btn2').css('display', 'block')
});


$('.d-cases__btn2').click(function(){
	$('.d-cases-slider').animate({height:690}, blockSpeed);
	$('.d-cases__btn').css('display', 'block')
	$(this).css('display', 'none')
});

if(width < 576) {
	$('.d-cases-slider').css('height','auto');
}


// PRODUCTION CASES SPOILER END





// PRODUCTION CASES SLIDER START
const $dslick = $('.d-cases-slider')

if(width < 576){
	$dslick.slick({
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
}
// PRODUCTION CASES SLIDER END



// PRICE TABS START
$(".tab_item").not(":first").hide();
$(".tabs__wrapper .tab").click(function() {
	$(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
	tabListener()
	if(width < 992){
		$('.tabs').removeClass('tabs--active')
		$('.tabs__close').css('display', 'none')
		$('.tabs__gumburger').css('display', 'block')
	}
	blockHeight2 = $('.c-cases-slider').eq($(this).index())
	.css('height', 'auto')
	.height();
	$('.c-cases-slider').eq($(this).index()).css('height', '1032')
	$('.c-cases__btn2').css('display','none')
}).eq(0).addClass("active");



// mobile
function tabListener(){
	let activeTab = $('.tabs .active').text()
	$('.tabs__dublicate').text(activeTab)
}
tabListener()
// PRICE TABS END

// MOBILE TABS START
const linkTab = document.getElementsByClassName('tabs__gumburger')
const closeTab = document.getElementsByClassName('tabs__close')
const menuTab = document.getElementsByClassName('tabs')


if(linkTab[0]){
	linkTab[0].addEventListener('click', function(event) {
		event.preventDefault()
		menuTab[0].classList.add('tabs--active')
		linkTab[0].style.display = 'none'
		closeTab[0].style.display = 'block'
	})
}

if(closeTab[0]){
	closeTab[0].addEventListener('click', function(event) {
		event.preventDefault()
		menuTab[0].classList.remove('tabs--active')
		linkTab[0].style.display = 'block'
		closeTab[0].style.display = 'none'
	})
}
// MOBILE TABS END



// CONSTRACTOR SLIDER START

const $contrSlick = $('.profit__wrap')

if(width < 576){
	$contrSlick.slick({
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
}
// CONSTRACTOR SLIDER END


//CASES SPOILER START
let blockHeight2 = $('.c-cases-slider').height();

function casesReinit(){
	$('.c-cases-slider').css('height','auto');
	$('.c-cases-slider').css('height','1032');
	$('.c-cases__btn2').css('display', 'none')

}
casesReinit()



$('.c-cases__btn').click(function(){
	$('.c-cases-slider').animate({height:blockHeight2}, blockSpeed);
	$(this).css('display', 'none')
	$('.c-cases__btn2').css('display', 'block')
});

$('.c-cases__btn2').click(function(){
	$('.c-cases-slider').animate({height:1032}, blockSpeed);
	$('.c-cases__btn').css('display', 'block')
	$(this).css('display', 'none')
});
// CASES SPOILER END



// PROJECT SLIDER START
$('.project__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 900,
	arrows: false,
	dots: true,
	infinite: false,
	appendDots: '.project__dots'
});
// PROJECT SLIDER END

// APPEND IMG TO DOTS START
const projectsImages = $('.project__wrap img')
for(let i = 0; i < projectsImages.length; i++) {
	let attrImage = $('.project__wrap img').eq(i).attr('src')
	$('.project__dots li').eq(i).html('<img src="' + attrImage + '">')
}
// APPEND IMG TO DOTS END

// DOTS SLIDER START
$('.slick-dots').slick({
	slidesToShow: 9,
	slidesToScroll: 3,
	speed: 900,
	arrows: true,
	infinite: false,
	prevArrow: '<div class="y_prevArrow"><img src="img/@2x/project/left-arrow.png" alt="" /></div>',
	nextArrow: '<div class="y_nextArrow"><img src="img/@2x/project/left-arrow.png" alt="" /></div>',
});

const widthImg = $('.project__slider').width()
$('.project__dots').css('width', widthImg)
// DOTS SLIDER END


// THANS SLIDER START
$('.thanks__slider').slick({
	prevArrow: '<div class="y_prevArrow"><img src="img/@2x/project/left-arrow.png" alt="" /></div>',
	nextArrow: '<div class="y_nextArrow"><img src="img/@2x/project/left-arrow.png" alt="" /></div>',
	slidesToShow: 1,
	infinite: true,
	arrows: true,
	dots: true
});
// THANS SLIDER START

// DOTS MARGINE START
if(width > 1200){
	const widthDots = $('.thanks__promo .slick-dots').width()/2
	$('.thanks__promo .slick-dots').css('margin-left', widthDots)
// DOTS MARGINE END

// .CERTIFICATE SPOILER START
let certificateHeight2 = $('.certificate__inner').height();

$('.certificate__inner').css('height','1200');


$('.certificate__btn-more').click(function(){
	$('.certificate__inner').animate({height:certificateHeight2}, blockSpeed);
	$('.certificate__item-but').css('display', 'none')
});

$('.certificate__btn-close').click(function(){
	$('.certificate__inner').animate({height:1200}, blockSpeed);
	$('.certificate__item-but').css('display', 'block')
});
} else {
	$('.certificate__inner').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		dots: false
	});

}

// .CERTIFICATE SPOILER END

// CONTACTS FLOAR START
const containerWidth = $('.container').width()
const contactFloat = (width - 1396) / 2
$('.contacts__left').css('left', contactFloat)

// CONTACTS FLOAR END

// FORM POPUP START
$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',
	closeBtnInside: true,
	closeMarkup:'<button title="%title%" class="mfp-close">&#10006;</button>',
});

// FORM POPUP END



}) //EDN TAG
