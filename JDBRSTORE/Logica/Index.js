document.addEventListener('DOMContentLoaded', () => {
    const golDiv = document.getElementById('gol');

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    function renderProducts() {
     
        productos.forEach(producto => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;

            const productInfoDiv = document.createElement('div');
            productInfoDiv.className = "product-info";

            const name = document.createElement('h4');
            name.textContent = producto.nombre;

            const price = document.createElement('h5');
            price.textContent = `Price: $${producto.precio}`;

            const desc = document.createElement('h5');
            desc.textContent = `Descuento: $${producto.descuento}`;

            if (producto.descuento > 0) {
                desc.style.color = "green";
            } else {
                desc.style.color = "red";
            }

            const pf = document.createElement('h5');
            var pfo = producto.precio - (producto.precio * producto.descuento / 100);
            pf.textContent = `Precio final: $${pfo}`;

            const units = document.createElement('h5');
            units.textContent = `Units: ${producto.cantidad}`;

            const addButton = document.createElement('button');
            addButton.textContent = "Add to cart";
            addButton.onclick = function () {
                if (producto.cantidad > 0) {
                    producto.cantidad = producto.cantidad - 1;
                    units.textContent = `Units: ${producto.cantidad}`;
                    if (producto.cantidad === 0) {
                        addButton.disabled = true;
                        addButton.textContent = "Out of stock";
                    }
                    localStorage.setItem('productos', JSON.stringify(productos));
                }
            };

           

            productInfoDiv.appendChild(name);
            productInfoDiv.appendChild(price);
            productInfoDiv.appendChild(desc);
            productInfoDiv.appendChild(pf);
            productInfoDiv.appendChild(units);
            productInfoDiv.appendChild(addButton);

            productDiv.appendChild(img);
            productDiv.appendChild(productInfoDiv);

            golDiv.appendChild(productDiv);
        });
    }

    renderProducts();
});


const deleteAllButton = document.getElementById('deleteAllButton');

deleteAllButton.addEventListener('click', () => {
    if (confirm("¿Estás seguro de que deseas eliminar todos los productos?")) {
        localStorage.removeItem('productos');

        localStorage.setItem('productos', JSON.stringify(productos));

        alert("Todos los productos han sido eliminados y reiniciados.");
        window.location.reload(); 
    }
});


function getURLParameter(firstname) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(firstname);
}

const credentialsParam = getURLParameter('credentials');


if (credentialsParam) {
    const credentials = JSON.parse(credentialsParam);
    const firstname = credentials.firstname;

    const welcomeElement = document.getElementById('holap');
    welcomeMensaje = ('Welcomme ' + firstname)
    welcomeElement.innerText = welcomeMensaje;
    const nav = document.querySelector('nav');
    const golDiv = document.getElementById('gol');

    nav.insertAdjacentElement('afterend', welcomeElement);
    
}


