const contenedor = document.getElementById("carrito-contenido");
const totalDiv = document.getElementById("carrito-total");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderCarrito() {
  contenedor.innerHTML = "";
  totalDiv.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="carrito-vacio">
        <p>🛒 Tu carrito está vacío</p>
        <small>Agrega productos para comenzar tu compra</small>
      </div>
    `;
    return;
  }

  let total = 0;

  carrito.forEach((producto, index) => {
    total += producto.precio;

    contenedor.innerHTML += `
      <div class="carrito-item">
        <div>
          <h4>${producto.nombre}</h4>
          <p>$ ${producto.precio}</p>
        </div>
        <button onclick="eliminar(${index})">❌</button>
      </div>
    `;
  });

  totalDiv.innerHTML = `
    <h3>Total: $ ${total}</h3>
  `;
}

function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

renderCarrito();
