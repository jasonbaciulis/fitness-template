import '../custom.scss';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/scrollspy';

$(window).scroll(function () {
	var a=$(this).scrollTop();
	a>$(this).height()/3?$(".fixed-navbar").addClass("nav-fix"):
	$(".fixed-navbar").removeClass("nav-fix"),
	a+$(window).height()>=$(document).height()-$("footer").height()
});

$(function() {
	$('#mobileNav').on('click', function() {
		$('.fixed-navbar').css({backgroundColor: 'rgba(13,17,25,0.9)'});
	});
});

var nav = document.querySelector('.nav');

nav.addEventListener('click', function(e) {
	var clickedLink = e.target;
	// console.log(clickedLink);
	var href = clickedLink.getAttribute('href');
	// console.log(href);
	TweenLite.to(window, 1, {scrollTo:{y: href, autoKill: false}});
});

