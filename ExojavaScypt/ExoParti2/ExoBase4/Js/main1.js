function deleteInput(){
  let deletInput = document.getElementsByClassName('deleteInput');

  for( i=0; i < deletInput.length ;i++){
    deletInput[i].value = null;
  }
    // document.getElementById("nom").value = null;
    // document.getElementById("prenom").value = null;
    // document.getElementById("ville").value = null;
}