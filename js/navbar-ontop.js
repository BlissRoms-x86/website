/**
 * navbar-ontop.js 1.0.0
 * Add .navbar-ontop class to navbar when the page is scrolled to top
 * Make sure to add this script to the <head> of page to avoid flickering on load
 */

(function() {

	var className = "navbar-ontop"

	// we start hidden, to avoid flickering
	document.write("<style id='temp-navbar-ontop'>.navbar {opacity:0; transition: none !important}</style>")

	function update() {
		var nav = document.querySelector(".navbar")
		if (!nav) return

		if (window.scrollY > 15)
			nav.classList.remove(className)
		else
			nav.classList.add(className)
	}

	function reveal() {
		var temp = document.querySelector("#temp-navbar-ontop")
		if (temp) temp.remove()
	}

	document.addEventListener("DOMContentLoaded", function() {
		var collapse = document.querySelector(".navbar .collapse")
		if (collapse) {
			collapse.addEventListener("show.bs.collapse", function() {
				var nav = document.querySelector(".navbar")
				if (nav) nav.classList.remove(className)
			})
			collapse.addEventListener("hidden.bs.collapse", update)
		}

		update()
		setTimeout(reveal)
	})

	window.addEventListener("scroll", update)

})();
