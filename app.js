var hamburguesa_menu;
var big_wrapper;
function declare() {
  big_wrapper = document.querySelector(".big_wrapper");
  hamburguesa_menu = document.querySelector(".hamburguesa-menu");
}

function events() {
  hamburguesa_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}
declare();
events();
