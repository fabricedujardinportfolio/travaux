

//créer une fonction permettant d’afficher le reste de leur division

//L’appeler depuis le fichier html.

let myForm = document.getElementById('myForm');
// console.log(myForm);

document.getElementById('valid_button').addEventListener('click',function(event){
    event.preventDefault();
    let nombre1 = document.getElementById('premier_nombre').value;
    let nombre2 = document.getElementById('deuxieme_nombre').value;

    nombre1 = window.parseInt(nombre1);

    console.log(nombre1);
    console.log(nombre2);

    result = myFunction(nombre1,nombre2);
    console.log(result);
    alert(result);

});