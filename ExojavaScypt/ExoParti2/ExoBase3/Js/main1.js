function sendMessage(x){
    return function(event){
        event.preventDefault();
        console.log(x);
        alert(x);
    }
}