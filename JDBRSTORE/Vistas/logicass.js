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
        alert('PERMITIDO');
        window.open("index.html");   
    } else {
        alert('Incorrecto');
    }

    console.log('Dato guardado:', inputValue);
    console.log('Dato guardado:', inputValues);
});
