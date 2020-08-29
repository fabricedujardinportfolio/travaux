const button = document.querySelector('.button');
let menuOpen = false;
button.addEventListener('click', () => {
    if(!menuOpen){
       button.classList.add('open'); 
       menuOpen = true;
    }
    else{
        button.classList.remove('open');
        menuOpen = false;
    }
});