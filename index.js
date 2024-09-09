// Variables iniciales
const precio = 400000;
let cantidad = 0;
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Mostrar precio inicial en el DOM
precioSpan.innerHTML = precio;

// Función para actualizar el total
function actualizarTotal() {
    const total = cantidad * precio;
    totalSpan.innerHTML = total;
}

// Evento para el botón "+"
document.querySelector("button:nth-of-type(1)").addEventListener("click", () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
});

// Evento para el botón "-"
document.querySelector("button:nth-of-type(2)").addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
});
