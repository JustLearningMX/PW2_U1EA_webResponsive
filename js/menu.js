//HIRAM CHAVÉZ LÓPEZ -UNADM -PW2 U1-EA -4-FEBRERO-2022
//ABRIR-CERRAR MENÚ HAMBURGUESA

const navToggle = document.querySelector(".menuLabel");//Icono de menu hamburguesa
const navMenu = document.querySelector(".menu"); //Array de las opciones del menu

//Escuchamos cuando se de clic en el icono de menu hamburguesa
navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav-menu_visible");//Agrega la clase para mostrar el menu

    //Atributo para discapacidad visual
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Abrir menú");
    } else {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }
});  

//Escuchamos si hay clic en una opción del menú
window.addEventListener("click", (event) =>{
    // const nodoAnterior = event.path[1].previousSibling.previousSibling;
    const nodoActual = event.path[1];//Ubicamos el nodo al que se dió clic
    // const nodoActualTextContent = nodoActual.lastChild.textContent;
    // const nodoSiguiente = event.path[1].nextSibling.nextSibling;

    let nodoSeleccionadoAnterior;//Variable para guardar el nodo que previo seleccionado

    if(nodoActual.getAttribute('id') ==="menu-items"){//Si se eligió una opción del menú

        for (let i = 0; i < navMenu.children.length; i++) {//Recorremos las opciones del menu
            if(navMenu.children[i].className){//Si una opción del menú tiene la clase "selected"
                nodoSeleccionadoAnterior = navMenu.children[i];//Guardamos ese nodo
            };            
        };

        nodoActual.classList.toggle("selected");//El nodo seleccionado lo remarcamos
        nodoSeleccionadoAnterior.classList.toggle("selected");//Y el nodo anterior remarcado, lo desmarcamos

        navMenu.classList.toggle("nav-menu_visible");//Se oculta el menú
       
        // console.log("nodoActual: ", nodoActual);
        // nodoActualTextContent === " Inicio " ? console.log("nodoActualTextContent: ", nodoActualTextContent) 
        // : console.log("falso: ", nodoActualTextContent);
    }
});