let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let nh =""
let nm =""
let ns =""
function showDate(){

    s++;
    if(s>60){
        m++;
        s=0;
        if(m>60){
            h++;
            m=0;
            s=0;
            if(h>24){
                h = 0;
                m = 0;
                s = 0;
            }
        }
    } 

    if( h < 10 ){ nh = '0' + h; }
    if( m < 10 ){ nm = '0' + m; }
    if( s < 10 ){ ns = '0' + s; }

    console.log(nh,nm,ns);


     let time = h + ':' + m + ':' + s;
             document.getElementById('horloge').innerHTML = time;
    //         refresh();


}
setInterval(showDate,1000);