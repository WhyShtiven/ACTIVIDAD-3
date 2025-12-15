const productos = [
  {
    id: 1,
    nombre: "Bolsas Biodegradables 100 pzas",
    categoria: "Empaques",
    precio: 15.99,
    imagen: "https://images.unsplash.com/photo-1611077542327-7a9a32b2c2c5",
    badge: "Biodegradable"
  },
  {
    id: 2,
    nombre: "Cubiertos de Madera 100 pzas",
    categoria: "Vajillas",
    precio: 18.75,
    imagen: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    badge: "Biodegradable"
  },
  {
    id: 3,
    nombre: "Detergente Ecológico",
    categoria: "Limpieza",
    precio: 22.0,
    imagen: "https://images.unsplash.com/photo-1581579185169-1c9c5d7caa54",
    badge: "Eco"
  },
  {
    id: 4,
    nombre: "Cajas Compostables",
    categoria: "Empaques",
    precio: 20.0,
    imagen: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    badge: "Compostable"
  }
];

const contenedor = document.getElementById("productos");

function mostrar(lista) {
  contenedor.innerHTML = "";

  lista.forEach(p => {
    contenedor.innerHTML += `
      <div class="product-card">
        <div class="product-image">
          <img src="${p.imagen}" alt="${p.nombre}">
          <span class="badge">${p.badge}</span>
        </div>

        <div class="product-info">
          <small class="categoria">${p.categoria}</small>
          <h4>${p.nombre}</h4>
          <p class="precio">$ ${p.precio}</p>
          <button onclick="agregar(${p.id})">
            🛒 Agregar
          </button>
        </div>
      </div>
    `;
  });
}

function filtrar(cat) {
  if (cat === "Todos") {
    mostrar(productos);
  } else {
    mostrar(productos.filter(p => p.categoria === cat));
  }
}

function agregar(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(productos.find(p => p.id === id));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito 🌱");
}

mostrar(productos);
