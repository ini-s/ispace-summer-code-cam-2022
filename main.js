button = document.querySelector(".toggle-btn")
button.addEventListener("click", (e)=> {
    console.log(e);
    // menu =  e.target.classList;
    // console.log(menu)
    // if (menu ===  "fa-solid", "fa-bars", "fa-2x"){
    //     console.log(menu)
    //     menu.remove( "fa-solid", "fa-bars", "fa-2x")
    //     menu.add("fa-solid", "fa-xmark", "fa-2x")
    // }
    // else if (menu === "fa-solid", "fa-xmark", "fa-2x"){
    //     menu.remove("fa-solid", "fa-xmark", "fa-2x")
    //     menu.add("fa-solid", "fa-bars", "fa-2x")
    // }
    menu = e.target
    console.log(menu.getAttribute("class"))
    if (menu.getAttribute("class") ===  "fa-solid fa-bars fa-2x"){
        menu.setAttribute("class", "fa-solid fa-xmark fa-2x")
    }
    else {
            menu.setAttribute("class", "fa-solid fa-bars fa-2x")
    }
})