let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

function showDate(){

    s++;
    if(s >= 60){
        m++;
        s=0;
        
    } 
    if(m>=60){
        h++;
        m=0;
        
    }
    if(h>=24){
        h = 0;
    }
    let ns = s;
    let nh = h;
    let nm = m;

    if( h < 10 ){ nh = '0' + h; }
    if( m < 10 ){ nm = '0' + m; }
    if( s < 10 ){ ns = '0' + s; }

    console.log(nh,nm,ns);


     let time = nh + ':' + nm + ':' + ns;
    document.getElementById('horloge').innerText = time;
    //         refresh();


}
setInterval(showDate,1000);