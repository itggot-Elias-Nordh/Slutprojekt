function menuOpen() {
   document.querySelector(".menu").classList.add("animation");
   document.querySelector(".menu").classList.remove("animation2");
   document.querySelector(".none").classList.add("shadow");
}

function menuClose() {
   document.querySelector(".menu").classList.remove("animation");
   document.querySelector(".menu").classList.add("animation2");
   document.querySelector(".none").classList.remove("shadow");
}

function listOpen(list_name) {
   document.querySelector(list_name).classList.toggle("none");
   document.querySelector(list_name + '_closed').classList.toggle("none");
}
