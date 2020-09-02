//Demander 2 nombre à virgules

//alert multiplié et affiché le résulta en entié 

let myForm = document.getElementById('myForm');
// console.log(myForm);

myForm.addEventListener('submit',function(event){
    event.preventDefault();
    let nombre1 = document.getElementById('premier_nombre');
    let nombre2 = document.getElementById('deuxieme_nombre');

    console.log(nombre1.value);
    console.log(nombre2.value);

    result = window.parseInt(nombre1.value) * nombre2.value;
    
    console.log(result);
    alert(result);

})