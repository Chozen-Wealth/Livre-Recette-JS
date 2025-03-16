let card = document.querySelectorAll(".card");
let btn = document.querySelector("#emailButton");
let input = document.querySelector("#emailInput");

// Mouseover gray
card.forEach( element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "gray";
        element.style.color = "white";
    })
})
// Mouseout white
card.forEach( element => {
    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    })
})
// Click shadowbox
card.forEach( element => {
    element.addEventListener("click", () => {
        element.style.boxShadow = "5px 5px 20px black";
        let btnLien = document.querySelector(".btn");
        const supprimer = document.createElement("button");
        supprimer.style.backgroundColor = "red"
        supprimer.style.width = "100px"
        supprimer.innerText = "X"
        let cardBody = document.querySelector(".card-body");
        cardBody.append(supprimer)



    })
})
// Dblclick remove
card.forEach( element => {
    element.addEventListener("dblclick", () => {
        element.remove();
    })
})

btn.addEventListener("click", () => {
    if (input.value == "") {
        alert("Veuillez entrer une adresse valide.")
    }
    else {
        alert("L'adresse " + input.value + " a bien été ajoutée !")
    }
})

