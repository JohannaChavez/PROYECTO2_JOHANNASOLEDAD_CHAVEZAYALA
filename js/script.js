fetch("viajes.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("viajes", JSON.stringify(datos));
    const gridViajes = document.getElementById("grid-viajes");
    const datosViajes = JSON.parse(localStorage.getItem("viajes"));
    console.log(datosViajes);
    if (datosViajes) {
      datosViajes.forEach((viajes) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.innerHTML = `
                            <div>
                                <div class="card">
                                <img src="../img/${viajes.imagen}"
                                class="card-img-top"
                                alt=" fotografia de paisaje rocoso junto al mar con pingüinos y lobos marinos"/>
                                <div class="card-body">
                                    <h5 class="card-title">${viajes.Destino}</h5>
                                    <p class="card-text"> ${viajes.resumen} </p>
                                </div>
                                </div>
                            </div>`;

        gridItem.addEventListener("click", () => {
          mostrarDetalleViajes(viajes);
        });

        gridViajes.appendChild(gridItem);
      });
    }
  });

function mostrarDetalleViajes(viajes) {
  window.location.href = `destino.html?id=${viajes.id}`; //poner la otrapagina
}
