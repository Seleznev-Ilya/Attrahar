let avatar = document.getElementById('namePage');
let fixed = document.getElementById('itemNamePage');
let atr = document.getElementById('attrahar');


window.onscroll = function() {
    let winSet = window.pageYOffset;
    // console.log(winSet);
    if(winSet < 360 ){
           avatar.style.opacity = '0';
        } else {
           avatar.style.opacity = '1';
           atr.style.position = fixed;

       }


}



