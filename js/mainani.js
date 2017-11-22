// this thing is js driven on slid.es so I didn't bother switching out for css animations
var duration = 7000, steps = 3, step = 1;

setInterval( function() {
	document.querySelector( '.animation' ).setAttribute( 'data-animation-step', step = ++step > steps ? 1 : step );
}, duration / steps );