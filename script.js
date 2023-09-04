// Espera a que el documento HTML se cargue completamente antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function () {
    
    // Selecciona todos los elementos con la clase "rolling-text" y los almacena en un NodeList llamado "elements".
    let elements = document.querySelectorAll(".rolling-text");

    // Itera a través de cada elemento con la clase "rolling-text".
    elements.forEach((element) => {
        
        // Obtiene el texto interno del elemento y lo almacena en la variable "innerText".
        let innerText = element.innerText;
        
        // Limpia el contenido HTML del elemento para prepararlo para la animación.
        element.innerHTML = "";

        // Crea un nuevo contenedor div para el texto y le agrega la clase "block".
        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        // Itera a través de cada letra en el texto interno.
        for (let letter of innerText) {
            
            // Crea un nuevo elemento span para cada letra.
            let span = document.createElement("span");
            
            // Si la letra es un espacio en blanco, se reemplaza por un espacio no rompible (&nbsp;).
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            
            // Agrega la clase "letter" al elemento span.
            span.classList.add("letter");
            
            // Agrega el elemento span al contenedor de texto.
            textContainer.appendChild(span);
        }

        // Agrega dos copias del contenedor de texto al elemento original.
        element.appendChild(textContainer.cloneNode(true));
        element.appendChild(textContainer.cloneNode(true));
    });

    // Agrega manejadores de eventos para cuando el cursor se coloca sobre y se quita de los elementos con la clase "rolling-text".
    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            // Cuando el cursor se coloca sobre el elemento, agrega la clase "play" para activar la animación.
            element.classList.add("play");
        });
        element.addEventListener("mouseout", () => {
            // Cuando el cursor se quita del elemento, elimina la clase "play" para detener la animación.
            element.classList.remove("play");
        });
    });
});



