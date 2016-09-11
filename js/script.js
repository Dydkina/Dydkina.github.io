	  	var btn = document.querySelector(".in-sedona");
	  	var popup = document.querySelector(".modal-content");

      btn.addEventListener("click", function(event) {
  event.preventDefault();
  if (!popup.classList.contains("modal-content-show")){
    popup.classList.add("modal-content-show");
  } else {
    popup.classList.remove("modal-content-show");
  }
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});  