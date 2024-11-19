let Credencailes = [
    {
        username: "JDBR00",
        password: "123456"
    }
];


const inputField = document.getElementById('userInput');
const inputpass = document.getElementById('userpass');
const saveButton = document.getElementById('saveButton');


saveButton.addEventListener('click', () => {
    
    const inputValue = inputField.value;
    const inputValues = inputpass.value 

    if(inputValue == Credencailes[0].username){
        if(inputValues==Credencailes[0].password){
            alert('permitido');
        }else{
            alert('pasword incorret')   
        }
    }else{
        alert('username incoretc')
            
    }

    console.log('Dato guardado:', inputValue);
    console.log('Dato guardado:', inputValues);
    
});
