//your JS code here. If required.
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");



btn.addEventListener("click", function onClick() {
	
search.classList.toggle("active");
	if (search.classList.contains("active")) {
		input.focus();
	}
});

