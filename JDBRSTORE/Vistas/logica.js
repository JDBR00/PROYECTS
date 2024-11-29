let productos = [
    { 
        nombre: "Cubo de rubuk", 
        precio: 20990, 
        cantidad: 10, 
        categoria: "Juguetes",
        descuento: 10,
        imagen: "https://i.ytimg.com/vi/GyY0OxDk5lI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCN4Iwa4vko930i1sIKfyGsTHVIew"
    },
    { 
        nombre: "Camisa", 
        precio: 29990, 
        cantidad: 5, 
        categoria: "Ropa",
        descuento: 5,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_714678-MCO50047717627_052022-O.webp"
    },
    { 
        nombre: "cargador", 
        precio: 15990, 
        cantidad: 15, 
        categoria: "Electrónica",
        descuento: 18,
        imagen:"https://andinotec.com/wp-content/uploads/2021/01/11481.jpg" 
    },
    { 
        nombre: "Zapatos", 
        precio: 300990, 
        cantidad: 8, 
        categoria: "Calzado",
        descuento: 1,
        imagen:"https://static.dafiti.com.co/p/converse-2367-9310091-1-zoom.jpg" 
    }
];

let Credenciales = [
    {
        username: "JDBR00",
        password: "123456"
    }
];

function cargarProductos() {
    const contenedorProductos = document.getElementById("gol"); 

    productos.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.className='product'; 

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

        if(producto.descuento > 0){
            desc.style.color = "green";
        }else{
            desc.style.color = "red";
        }

        const pf = document.createElement('h5');
        var pfo = producto.precio - (producto.precio * producto.descuento / 100);
        pf.textContent = `Precio final: $${pfo}`;
        
        const units = document.createElement('h5');
        units.textContent = `Units: ${producto.cantidad}`;

        const addButton = document.createElement('button');
        addButton.textContent = "Add to cart";
        addButton.onclick = function() {
            producto.cantidad = producto.cantidad - 1;
            units.textContent = `Units: ${producto.cantidad}`;
        };

        productInfoDiv.appendChild(name);
        productInfoDiv.appendChild(price);
        productInfoDiv.appendChild(units);
        productInfoDiv.appendChild(desc);
        productInfoDiv.appendChild(pf);
        productInfoDiv.appendChild(addButton);

        productDiv.appendChild(img);
        productDiv.appendChild(productInfoDiv);
        contenedorProductos.appendChild(productDiv);

    });
}

window.onload = cargarProductos;



let Credencailes = [
    {
        username: "JDBR00",
        firstname: "juan",
        password: "0"
    },
    {
        username: "Angel",
        firstname: "A",
        password: "1"
    },
    {
        username: "Taylor",
        firstname: "L",
        password: "2"
    }

];


const inputField = document.getElementById('userInput');
const inputpass = document.getElementById('userpass');
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {

    const inputValue = inputField.value;
    const inputValues = inputpass.value;

    let validUser = Credencailes.some(
        cred => cred.username === inputValue && cred.password === inputValues 
    );

    if (validUser) {
        alert('acces permitted');
        
        const user = Credencailes.find(cred => cred.username === inputValue && cred.password === inputValues);
        const firstname = user ? user.firstname : "";


        const baseURL = "http://127.0.0.1:5500/JDBRSTORE/Vistas/index.html";

    
        const credentials = 
            { 
                username: inputValue,
                firstname: firstname,
                password: inputValues 
            };


        const params = {
            credentials: JSON.stringify(credentials)
        };

        const fullURL = `${baseURL}?${new URLSearchParams(params)}`;

        console.log(fullURL);
        window.open(fullURL)


      
    } else {
        alert('User or password incorret');
    }

    console.log('Dato guardado:', inputValue);
    console.log('Dato guardado:', inputValues);
});



function getURLParameter(firstname) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(firstname);
}

const credentialsParam = getURLParameter('credentials');


if (credentialsParam) {
    const credentials = JSON.parse(credentialsParam);
    const firstname = credentials.firstname;

    const welcomeElement = document.createElement('h4');
    welcomeElement.innerText = welcomeMessage;
    document.body.appendChild(welcomeElement);
    
}


