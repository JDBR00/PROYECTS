let ROLES = {
    ADMIN: 'Admin',
    USER: 'User',
    GUEST: 'Guest'
};

let Credencailes = [
    {
        username: "JDBR00",
        firstname: "Juan",
        password: "0",
        Rol: ROLES.ADMIN
    },
    {
        username: "Angel",
        firstname: "A",
        password: "1",
        Rol: ROLES.USER

    },
    {
        username: "Taylor",
        firstname: "L",
        password: "2",
        Rol: ROLES.GUEST

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
        const Rol = user ? user.Rol : "";


        const baseURLAdmmin = "IndexAdmin.html";
        const baseURLGuest = "IndexGuest.html";
        const baseURLUser = "IndexUser.html";

        const credentials = 
            { 
                username: inputValue,
                firstname: firstname,
                password: inputValues,
                Rol: Rol
            };


        const params = {
            credentials: JSON.stringify(credentials)
        };

        const fullURLA = `${baseURLAdmmin}?${new URLSearchParams(params)}`;
        const fullURLG = `${baseURLGuest}?${new URLSearchParams(params)}`;
        const fullURLU = `${baseURLUser}?${new URLSearchParams(params)}`;


        if (Rol == ROLES.ADMIN) {
            console.log(fullURLA);
            window.open(fullURLA);
        } else if (Rol == ROLES.GUEST) {
            console.log(fullURLG);
            window.open(fullURLG);
        } else if (Rol == ROLES.USER) {
            console.log(fullURLU);
            window.open(fullURLU);
        } else {
            console.log("Rol desconocido");
        }
        

        
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