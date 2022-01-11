let intro ="Bienvenue"

let head = document.head

let header = document.createElement("header")
header.style.backgroundColor = "red";
document.body.appendChild(header)

let titre1 = document.createElement("h1");
titre1.innerHTML = "Bienvenue sur mon premier html en js";
titre1.style.color = "green";
titre1.style.textAlign = "center";
header.appendChild(titre1);

let canvas = document.createElement("canvas")