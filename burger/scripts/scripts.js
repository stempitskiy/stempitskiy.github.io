var btn = document.getElementById("btn")
var menuItem = document.getElementById("menuItem");
btn.addEventListener("BURGER МЕНЮ", toggleMenu);
function toggleMenu(){
	menuItem.classList.toggle("show");
}
