
const avatar = document.getElementById('namePage');
const win = window.pageYOffset;
function fun() {

       if(win < 200 ){
           avatar.style.opacity = '.1';
        } else if( win > 200 && win <600){
           avatar.style.opacity = '1';
       } else {
           avatar.style.opacity = '.5';
       }
}

fun();

