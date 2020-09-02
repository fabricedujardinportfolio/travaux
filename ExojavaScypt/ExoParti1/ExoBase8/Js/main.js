let myForm = document.getElementById('myForm');
console.log(myForm);
myForm.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event);
    let reponse = document.getElementById('age').value;
    console.log(reponse);

    if (reponse >= 18 ){
        window.alert('Vous êtes majeur')
    }
    if (reponse < 18 ){
        window.alert('Vous êtes mineur')
    }
    console.log(reponse);
});