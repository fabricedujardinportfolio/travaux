let name = document.getElementById('nom');
let button = document.getElementById("butt");
let form = document.getElementById("form");
let tempo = toString(name.value);
console.log(tempo);
button.addEventListener("click", sendMessage(tempo));
/*clickUser.addEventListener("focus", )*/