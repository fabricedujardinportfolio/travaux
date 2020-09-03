let myForm = document.getElementById('myForm');
let myList = document.getElementById('myList');
// console.log(myForm,myList);

myForm.addEventListener('submit',function(event){
    event.preventDefault();
    let input = event.target.task;
    if(input.value === ""){
        return false;
    }

    let li = document.createElement('li');

    li.innerHTML = input.value;
    myList.appendChild(li);
    input.value = "";

    let button = document.createElement('button');
    button.innerHTML = "Suprimer";
    li.appendChild(button);

    let input1 = document.createElement('input');
    input1.type = "checkbox";
    li.appendChild(input1);


    input1.addEventListener('change',function(event){

        if(event.target.checked){
        li.style.backgroundColor = "blue";
            }else{
            li.style.backgroundColor = "red";
        }
});

    button.addEventListener('click',function(event){
    event.preventDefault();
    myList.removeChild(li);
});
    

});