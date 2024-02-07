const elemento = document.querySelector(".hamburguer-icon");

// Adiciona um event listener para detectar cliques
elemento.addEventListener("click", myFunction);

function myFunction() {
  var x = document.querySelector(".mobile-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
