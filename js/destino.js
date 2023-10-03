document.addEventListener("DOMContentLoaded", () => {
  const destino = document.getElementById("destino");

  const urlParams = new URLSearchParams(window.location.search);
  const idDestino = parseInt(urlParams.get("id"));
  const datosDestino = JSON.parse(localStorage.getItem("viajes"));

  console.log(idDestino);

  const idDestinoSeleccionado = datosDestino.find(
    (ruta) => ruta.id === idDestino
  );
  if (idDestinoSeleccionado) {
    const contenedorIdDestino = document.createElement("div");
    contenedorIdDestino.classList.add("detalle-destino");
    contenedorIdDestino.innerHTML = `
<h2>${idDestinoSeleccionado.Destino}</h2>

<div id="carouselWithControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src="img/${idDestinoSeleccionado.paisajes[0]}" class="d-block w-100 responsive-image" alt="Slide 1 ">
    </div>
    <div class="carousel-item ">
    <img src="img/${idDestinoSeleccionado.paisajes[1]}" class="d-block w-100 responsive-image" alt="Slide 2">
    </div>
    <div class="carousel-item ">
    <img src="img/${idDestinoSeleccionado.paisajes[2]}" class="d-block w-100 responsive-image" alt="Slide 3">
    </div>
    <div class="carousel-item ">
    <img src="img/${idDestinoSeleccionado.paisajes[3]}" class="d-block w-100 responsive-image" alt="Slide 4">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>

<h4>${idDestinoSeleccionado.Salidas}</h4>
<h4>${idDestinoSeleccionado.Descripcion}</h4>
<h6>${idDestinoSeleccionado.Precio}</h6>
<h3></h3>
    `;
    destino.appendChild(contenedorIdDestino);
  }
});
const botonCompra = document.querySelector("#compra");
const cartel = () => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Tu compra fue realizada con éxito",
    showConfirmButton: false,
    timer: 2000,
  });
};
botonCompra.addEventListener("click", cartel);
