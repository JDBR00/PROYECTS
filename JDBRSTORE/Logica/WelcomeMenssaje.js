function getURLParameter(firstname) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(firstname);
}


document.addEventListener("DOMContentLoaded", () => {
    const credentialsParam = getURLParameter('credentials');
    console.log("paso 1");
    
    if (credentialsParam) {
        const credentials = JSON.parse(credentialsParam);
        const firstname = credentials.firstname;
    
        localStorage.setItem('firstname', firstname);
    
        const welcomeElement = document.getElementById('WecomeH4');
        welcomeMensaje = ('Welcomme ' + firstname)
        welcomeElement.innerText = welcomeMensaje;
        const nav = document.querySelector('nav');
        const golDiv = document.getElementById('gol');
    
        nav.insertAdjacentElement('afterend', welcomeElement);
        console.log("paso 2");
    
    } else {
        const firstname = localStorage.getItem('firstname');
        if (firstname) {
            const welcomeElement = document.getElementById('WecomeH4');
            welcomeMensaje = ('Welcome ' + firstname);
            welcomeElement.innerText = welcomeMensaje;
            const nav = document.querySelector('nav');
            const golDiv = document.getElementById('gol');
    
            nav.insertAdjacentElement('afterend', welcomeElement);
            
        }
    }
    
     

});


