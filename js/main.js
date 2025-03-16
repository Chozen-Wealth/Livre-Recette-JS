let card = document.querySelectorAll(".card");

card.forEach( element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "gray";
        element.style.color = "white";
    })
})

card.forEach( element => {
    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    })
})

card.forEach( element => {
    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    })
})

card.forEach( element => {
    element.addEventListener("click", () => {
        element.style.boxShadow = "5px 5px 20px black";
    })
})

card.forEach( element => {
    element.addEventListener("dblclick", () => {
        element.remove();
    })
})

a