let imgaes = ['img/logo-1.jpeg' , 'img/logo-2.jpeg' , 'img/download (4).jpeg' ,'img/Pepsi❄️.jpeg'];
let change = 0;

function changeImg() {
    change = (change + 1 ) % imgaes.length;
    document.getElementById("logo").src = imgaes[change];
}
setInterval(function(){   changeImg();   } , 1500);
