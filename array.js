const cars = ["Saab", "Volvo", "BMW"];
let divDemo = document.getElementById("demo");
divDemo.innerHTML = "<strong>Dans mon garage il y a :</strong> " + cars;


let paragraphe1 = document.createElement("p");
paragraphe1.innerHTML = "<strong>La premiere voiture est une:  </strong>" + cars[0];
divDemo.appendChild(paragraphe1);

let paragraphe2 = document.createElement("p");
paragraphe2.innerHTML = " <strong>La seconde voiture est une: </strong>" + cars[1];
divDemo.appendChild(paragraphe2);

let paragraphe3 = document.createElement("p");
paragraphe3.innerHTML = "<strong>La troisieme voiture est une: </strong>" + cars[2];
divDemo.appendChild(paragraphe3);



const telephone = ["Iphone","GalaxyS21","Xiaomi"];
let divDemo2 = document.getElementById("demo2");
divDemo2.innerHTML = "<strong>Mes telephones sont :</strong> " + telephone;


let paragraphe4 = document.createElement("p");
paragraphe4.innerHTML = "<strong>Mon premier telephone est un:  </strong>" + telephone[0];
divDemo2.appendChild(paragraphe4);

let paragraphe5 = document.createElement("p");
paragraphe5.innerHTML = " <strong>Mon second telephone est un: </strong>" + telephone[1];
divDemo2.appendChild(paragraphe5);

let paragraphe6 = document.createElement("p");
paragraphe6.innerHTML = "<strong>Mon troisieme telephone est un: </strong>" + telephone[2];
divDemo2.appendChild(paragraphe6);
