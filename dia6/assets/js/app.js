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
let categoriaSelectEliminar = document.getElementById('categoriaSelectEliminar');
let nuevoProductoInput = document.getElementById('nuevoProducto');
let containerAgregarProducto = document.getElementById('containerAgregarProducto');
let containerEliminarProducto = document.getElementById('containerEliminarProducto');
let btnIrAgregar = document.getElementById('btnIrAgregar');
let btnAgregar = document.getElementById('btnAgregar');
let btnMostrarLista = document.getElementById('btnMostrarLista');
let btnEliminar = document.getElementById('btnEliminar');
let btnMostrarEliminar = document.getElementById('btnMostrarEliminar');
let containerLista= document.getElementById('containerLista');
let productoLista = document.getElementById('listaProductos');
let titulo = document.getElementById('titulo');
let productoSelectEliminar = document.getElementById('productoSelectEliminar');

// Función para llenar el combo box con las categorías
function llenarCategorias() {
    categorias.forEach((categoria, index) => {
        let option = document.createElement('option');
        option.value = index; // Usar el índice como valor
        option.textContent = categoria.nombre;
        categoriaSelect.appendChild(option);
    });
}

// Función para llenar el combo box con las categorías para eliminar
function llenarCategoriasConProducto() {
    // Limpiar el select
    categoriaSelectEliminar.innerHTML = '';
    categorias.forEach((categoria, index) => {
        if(categoria.productos.length > 0){
        let option = document.createElement('option');
        option.value = index; // Usar el índice como valor
        option.textContent = categoria.nombre;
        categoriaSelectEliminar.appendChild(option);
        }
        
    });
    // si no hay categorias con productos
    if(categoriaSelectEliminar.length == 0){
        alert('No hay categorías con productos para eliminar');
    }
    actualizarProductos();

}

// funcion para llenar el combo box con los productos de la categoria seleccionada
function llenarProductosCategoria() {
    // Limpiar el select
    productoSelectEliminar.innerHTML = '';

    let categoriaIndex = categoriaSelectEliminar.value;
    let productos = categorias[categoriaIndex].productos;
    let productoSelect = document.getElementById('productoSelectEliminar');
    productoSelect.innerHTML = '';
    productos.forEach((producto, index) => {
        let option = document.createElement('option');
        option.value = index; // Usar el índice como valor
        option.textContent = producto;
        productoSelect.appendChild(option);
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

function mostrarLista() {
    const categoriaIndex = categoriaSelect.value;
    const productos = categorias[categoriaIndex].productos;

    // Cambiar el título de la lista
    titulo.textContent = "Lista de Productos";

    // Ocultar el contenedor de agregar producto
    containerAgregarProducto.style.display = 'none';
    // Ocultar el botón de agregar
    btnAgregar.style.display = 'none';
    // Ocultar de boton de Mostrar lista
    btnMostrarLista.style.display = 'none';
    // Mostrar el contenedor de la lista
    containerLista.style.display = 'block';
    // Mostrar el boton de ir a agregar
    btnIrAgregar.style.display = 'block';
    // Mostrar el boton de ir a eliminar
    btnMostrarEliminar.style.display = 'block';
    // Ocultar contenedor de eliminar producto
    containerEliminarProducto.style.display = 'none';
    // Oculatar boton de eliminar
    btnEliminar.style.display = 'none';



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

function irAgregar() {

    // Cambiar el título de la lista
    titulo.textContent = "Agregar Producto";

    // Ocultar el contenedor de la lista
    containerLista.style.display = 'none';
    // Ocultar el botón de ir a agregar
    btnIrAgregar.style.display = 'none';
    // Ocultar el boton de ir a eliminar
    btnMostrarEliminar.style.display = 'none';
    // Mostrar el contenedor de agregar producto
    containerAgregarProducto.style.display = 'block';
    // Mostrar el botón de agregar
    btnAgregar.style.display = 'block';
    // Mostrar de boton de Mostrar lista
    btnMostrarLista.style.display = 'block';
    // Ocultar contenedor de eliminar producto
    containerEliminarProducto.style.display = 'none';
}

function mostrarEliminar() {

    // Cambiar el título de la lista
    titulo.textContent = "Eliminar Producto";
    // Ocultar el contenedor de la lista
    containerLista.style.display = 'none';
    // Ocultar el botón de ir a agregar
    btnIrAgregar.style.display = 'none';
    // Ocultar el boton de ir a eliminar
    btnMostrarEliminar.style.display = 'none';
    //mostrar el boton de eliminar
    btnEliminar.style.display = 'block';
    // Mostrar de boton de Mostrar lista
    btnMostrarLista.style.display = 'block';
    // Mostrar el contenedor de eliminar producto
    containerEliminarProducto.style.display = 'block';

    llenarCategoriasConProducto();
    llenarProductosCategoria();
    
}

// Función para actualizar el combo box de productos basado en la categoría seleccionada
function actualizarProductos() {
    productoSelectEliminar.innerHTML = ''; // Limpiar el combo box de productos

    const categoriaIndex = categoriaSelectEliminar.value;

    if (categoriaIndex !== '') {
        // Obtener los productos de la categoría seleccionada
        const productos = categorias[categoriaIndex].productos;

        // Llenar el combo box con los productos de la categoría seleccionada
        productos.forEach((producto, index) => {
            let option = document.createElement('option');
            option.value = index; // Usar el índice del producto
            option.textContent = producto;
            productoSelectEliminar.appendChild(option);
        });
    }
}

// Evento para actualizar el combo box de productos cuando se selecciona una categoría diferente
categoriaSelectEliminar.addEventListener('change', actualizarProductos);

// Función para eliminar el producto seleccionado de la categoría seleccionada
function eliminarProducto() {
    const categoriaIndex = categoriaSelectEliminar.value;
    const productoIndex = productoSelectEliminar.value;

    if (categoriaIndex !== '' && productoIndex !== '') {
        // Eliminar el producto del arreglo de productos
        categorias[categoriaIndex].productos.splice(productoIndex, 1);

        // Actualizar el combo box de productos después de la eliminación
        actualizarProductos();

        alert('Producto eliminado correctamente.');

        // Si la categoría queda sin productos, actualizar el combo box de categorías
        if (categorias[categoriaIndex].productos.length === 0) {
            llenarCategoriasConProducto();
        }
    } else {
        alert('Por favor, selecciona un producto para eliminar.');
    }
}

llenarCategorias();