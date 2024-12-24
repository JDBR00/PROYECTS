const deleteAllButton = document.getElementById('deleteAllButton');


deleteAllButton.addEventListener('click', () => {
    if (confirm("¿Estás seguro de que deseas eliminar todos los productos?")) {
        localStorage.removeItem('productos');

        localStorage.setItem('productos', JSON.stringify(productos));

        alert("Todos los productos han sido eliminados y reiniciados.");
        window.location.reload(); 
    }
});