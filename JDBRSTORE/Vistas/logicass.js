let Credencailes = [
    {
        username: "JDBR00",
        firstname: "Juan",
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
