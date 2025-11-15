const modelo = document.getElementById("modelo");
const texto = document.getElementById("texto");
const contenedor = document.getElementById("contenedor");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 130) {
    contenedor.classList.add("contenedor-scroll-activo");
    modelo.style.transform = `translateX(40px) scale(0.6)`;
    modelo.style.width = "50%";
    modelo.style.marginTop = "100px";
    texto.style.transform = "translateX(60%)";
    texto.style.width = "50%";
    texto.style.textAlign = "right";
    texto.style.marginTop = "100px";
  } else if (scrollY < 150) {
    contenedor.classList.remove("contenedor-scroll-activo");
    modelo.style.transform = `translateX(0) scale(1)`;
    modelo.style.width = "100%";
    modelo.style.marginTop = "-10px";
    texto.style.transform = "translateX(0)";
    texto.style.width = "100%";
    texto.style.textAlign = "center";
    texto.style.marginTop = "10px";
  }
});
function toggleMenu() {
  const nav = document.querySelector(".navbar-nav");
  nav.classList.toggle("active");
}
