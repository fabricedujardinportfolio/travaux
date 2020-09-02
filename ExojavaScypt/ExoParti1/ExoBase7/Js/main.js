function myFunction(a,b){
    let result = (((a * 2) + 5)*50-b)+1766;
    return result;
    }



let myForm = document.getElementById('myForm');
// console.log(myForm);
myForm.addEventListener('submit',function(event){
    event.preventDefault();

    let pointure = document.getElementById('pointure').value;
    // console.log(pointure);
    let annerNaissance = document.getElementById('annee').value;
    // console.log(annerNaissance);

    let result = myFunction(pointure,annerNaissance) ;
    console.log(result);
    alert(result);
});