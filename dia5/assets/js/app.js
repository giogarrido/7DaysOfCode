let categorias =[
    {nombre: "Frutas", productos:[]},
    {nombre: "Lácteos", productos:[]},
    {nombre: "Congelados", productos:[]},
    {nombre: "Limpieza", productos:[]},
    {nombre: "Bebidas", productos:[]},
    {nombre: "Panadería", productos:[]},
    {nombre: "Carnes", productos:[]},
    {nombre: "Verduras", productos:[]},
    {nombre: "Otros", productos:[]}
];

let categoriaSelect = document.getElementById('categoriaSelect');
let nuevoProductoInput = document.getElementById('nuevoProducto');
let containerAgregarProducto = document.getElementById('containerAgregarProducto');
let btnRegresar = document.getElementById('btnRegresar');
let btnAgregar = document.getElementById('btnAgregar');
let containerLista= document.getElementById('containerLista');
let productoLista = document.getElementById('listaProductos');

// Función para llenar el combo box con las categorías
function llenarCategorias() {
    categorias.forEach((categoria, index) => {
        let option = document.createElement('option');
        option.value = index; // Usar el índice como valor
        option.textContent = categoria.nombre;
        categoriaSelect.appendChild(option);
    });
}

// Función para agregar un producto a la categoría seleccionada
function agregarProducto() {
    const categoriaIndex = categoriaSelect.value;
    const nuevoProducto = nuevoProductoInput.value.trim();

    if (nuevoProducto) {
        // Agregar el producto a la categoría seleccionada en el arreglo
        categorias[categoriaIndex].productos.push(nuevoProducto);

        // Mostrar mensaje de éxito
        alert(`Producto "${nuevoProducto}" agregado a la categoría "${categorias[categoriaIndex].nombre}".`);
        // Limpiar el input
        nuevoProductoInput.value = '';
    } else {
        alert("Por favor, ingresa un producto.");
    }

}

function mostrarProductos() {
    const categoriaIndex = categoriaSelect.value;
    const productos = categorias[categoriaIndex].productos;

    // Ocultar el contenedor de agregar producto
    containerAgregarProducto.style.display = 'none';
    // Ocultar el botón de agregar
    btnAgregar.style.display = 'none';
    // Mostrar el contenedor de la lista
    containerLista.style.display = 'block';
    // Mostrar el botón de regresar
    btnRegresar.style.display = 'block';



    // Limpiar la lista de productos previa
    productoLista.innerHTML = '';

    // Recorrer todas las categorías y mostrar sus productos
    categorias.forEach(categoria => {
        // Crear un título para la categoría
        const categoriaTitulo = document.createElement('h3');
        categoriaTitulo.textContent = categoria.nombre;
        productoLista.appendChild(categoriaTitulo);

        // Crear una lista para los productos de la categoría
        const ul = document.createElement('ul');

        if (categoria.productos.length > 0) {
            categoria.productos.forEach(producto => {
                const li = document.createElement('li');
                li.textContent = producto;
                ul.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = "No hay productos en esta categoría.";
            ul.appendChild(li);
        }

        productoLista.appendChild(ul);
    });

}

function regresar() {
    // Ocultar el contenedor de la lista
    containerLista.style.display = 'none';
    // Ocultar el botón de regresar
    btnRegresar.style.display = 'none';
    // Mostrar el contenedor de agregar producto
    containerAgregarProducto.style.display = 'block';
    // Mostrar el botón de agregar
    btnAgregar.style.display = 'block';
}

llenarCategorias();