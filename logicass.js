
            // Base de la URL
            const baseURL = "http://127.0.0.1:5500/JDBRSTORE/Vistas/index.html";

            // Parámetros a agregar a la URL
            const params = 
    
                {
                    username: inputValue,
                    firstname: Credencailes[0].firstname||Credencailes[1].firstname,
                    password: inputValues
                };
              
        
    
            // Convertir los parámetros a un formato de consulta
            const queryString = new URLSearchParams(params).toString();
    
            // Concatenar la URL con los parámetros
            const fullURL = `${baseURL}?${queryString}`;
    
            // Imprimir la URL
            console.log(fullURL); // https://example.com?name=Juan&age=30
            window.open(fullURL);
    
    
    
    
    