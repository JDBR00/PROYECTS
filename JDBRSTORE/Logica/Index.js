document.addEventListener('DOMContentLoaded', () => {
    
    

    function Navbar() {
        const Nav = document.createElement('nav');

        const NameAdmin = document.createElement('h3')
        NameAdmin.id = "name";

        const LinkNameAdmin = document.createElement('a');
        LinkNameAdmin.href = "index.html";
        LinkNameAdmin.textContent = "JDBRStoreADMIN";

        const UlNav = document.createElement('ul');
        UlNav.id = "mylist";

        const CreateNav = document.createElement('a');
        CreateNav.href = "Foms.html";
        
        const CreateNavInput = document.createElement('input');
        CreateNavInput.type = "button";
        CreateNavInput.value = "Create";
        CreateNavInput.id = "CrateElemet";

        const ListNavContacLi = document.createElement('li');
        const ListNavContacA = document.createElement('a');
        ListNavContacA.href = "Contact.html";
        ListNavContacA.textContent = "Contact";

        
        const ListNavProductsLi = document.createElement('li');
        const ListNavProductsA = document.createElement('a');
        ListNavProductsA.href = "Products.html";
        ListNavProductsA.textContent = "Products";

        const ListNavLoginLi = document.createElement('li');
        const ListNavLoginA = document.createElement('a');
        ListNavLoginA.href = "Products.html";
        ListNavLoginA.textContent = "Login";

        
        const ListNavSingUpLi = document.createElement('li');
        const ListNavSingUpA = document.createElement('a');
        ListNavSingUpA.href = "Products.html";
        ListNavSingUpA.textContent = "SingUp";

        document.body.appendChild(Nav);
        Nav.appendChild(NameAdmin);
        NameAdmin.appendChild(LinkNameAdmin);
        Nav.appendChild(UlNav);
        UlNav.appendChild(CreateNav);
        CreateNav.appendChild(CreateNavInput);
        UlNav.appendChild(ListNavContacLi);
        ListNavContacLi.appendChild(ListNavContacA);
        UlNav.appendChild(ListNavProductsLi);
        ListNavProductsLi.appendChild(ListNavProductsA);
        UlNav.appendChild(ListNavLoginLi);
        ListNavLoginLi.appendChild(ListNavLoginA);
        UlNav.appendChild(ListNavSingUpLi);
        ListNavSingUpLi.appendChild(ListNavSingUpA);
        

    }

    function renderProducts() {
        const golDiv = document.createElement('div');
        golDiv.id = "gol";
        document.body.appendChild(golDiv);

        let productos = JSON.parse(localStorage.getItem('productos') || '[]');
        
        console.log("paso 3");

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
            MenuBottomOpcions.style.display = 'none';
            
            const editOption = document.createElement('li');
            editOption.textContent = "Editar";
            editOption.id = "editOpcion";

            editOption.addEventListener('click', () => {
                const newName = prompt("Edita el nombre del producto:", producto.nombre);
                if (newName) {
                    producto.nombre = newName;
                    localStorage.setItem('productos', JSON.stringify(productos));
                    renderProducts(); 
                }
            });
            
            const deleteOption = document.createElement('li');
            deleteOption.textContent = "Eliminar";
            deleteOption.id = "deleteOpcion";

            deleteOption.addEventListener('click', () => {
                if (confirm("¿Estás seguro de eliminar este producto?")) {
                    productos = productos.filter(p => p !== producto);
                    localStorage.setItem('productos', JSON.stringify(productos));
                    renderProducts(); 
                }
            });

            const SelectionBottom = document.createElement('li');
            SelectionBottom.textContent = 'Seleccionar';
            SelectionBottom.id = 'selectOpcion';
        

            

            MenuBottom.addEventListener('click', () => {
            event.stopPropagation();
            MenuBottomOpcions.style.display = MenuBottomOpcions.style.display === 'block' ? 'none' : 'block';
            });

            document.body.addEventListener('click', (event) => {
                if (!event.target.closest('.menu-container')) {
                    document.querySelectorAll('.menu-options').forEach(menu => {
                        menu.style.display = 'none';
                    });
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
            MenuBottomOpcions.appendChild(editOption);
            MenuBottomOpcions.appendChild(deleteOption);
            MenuBottomOpcions.appendChild(SelectionBottom);     
            OverMenuInfo.appendChild(MenuBottomOpcions);

            OverMenuInfo.appendChild(MenuBottom);

            productDiv.appendChild(img);
            productDiv.appendChild(productInfoDiv);
            
            golDiv.appendChild(productDiv);
            
        });
        console.log("paso 4");
    }

    Navbar();
    renderProducts();
    console.log("paso 5");
});