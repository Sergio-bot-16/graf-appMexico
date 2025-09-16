const verdeSlider = document.getElementById("verde");
const rojoSlider = document.getElementById("rojo");

const verdeFranja = document.querySelector(".franja.verde");
const rojaFranja = document.querySelector(".franja.roja");

const verdeCode = document.getElementById("verdeCode");
const rojoCode = document.getElementById("rojoCode");

// Función para actualizar color verde
verdeSlider.addEventListener("input", () => {
  const g = verdeSlider.value;
  const color = `rgb(0, ${g}, 0)`;
  verdeFranja.style.backgroundColor = color;
  verdeCode.textContent = color;
});

// Función para actualizar color rojo
rojoSlider.addEventListener("input", () => {
  const r = rojoSlider.value;
  const color = `rgb(${r}, 0, 0)`;
  rojaFranja.style.backgroundColor = color;
  rojoCode.textContent = color;
});
