const hamburguesa = document.getElementById("hamburguesa");
const hamburguesaUl = document.getElementById("hamburguesa-ul");

hamburguesa.addEventListener("click", () => {
  if (hamburguesaUl.classList.contains("hidden-ul")) {
    hamburguesaUl.classList.add("show-ul");
    hamburguesaUl.classList.remove("hidden-ul");
  } else if (hamburguesaUl.classList.contains("show-ul")) {
    hamburguesaUl.classList.add("hidden-ul");
    hamburguesaUl.classList.remove("show-ul");
  }
});
