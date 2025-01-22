document.addEventListener('DOMContentLoaded', () => {
    
    const golDiv = document.createElement('div');

    golDiv.id = "gol";
    document.body.appendChild(golDiv);

    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("paso 3");


    function renderProducts() {
        golDiv.innerHTML = '';
        productos.forEach(producto => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;

            const OverMenuInfo = document.createElement('div');
            OverMenuInfo.className = "menu-container";

            
            const MenuBottom = document.createElement('button');
            MenuBottom.textContent = "⋮";
            MenuBottom.className = "menu-button";

            const MenuBottomOpcions = document.createElement('ul');
            MenuBottomOpcions.className = "menu-options";

            

            MenuBottom.addEventListener('click', () => {
            MenuBottomOpcions.style.display = MenuBottomOpcions.style.display === 'block' ? 'none' : 'block';
            });

            document.addEventListener('click', (event) => {
            if (!MenuBottom.contains(event.target) && !MenuBottomOpcions.contains(event.target)) {
                MenuBottomOpcions.style.display = 'none';
            }
            });

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
            
            
            productDiv.appendChild(OverMenuInfo);
            OverMenuInfo.appendChild(MenuBottom);

            productDiv.appendChild(img);
            productDiv.appendChild(productInfoDiv);
            
            golDiv.appendChild(productDiv);
            
        });
        console.log("paso 4");
    }


    renderProducts();
    console.log("paso 5");
});