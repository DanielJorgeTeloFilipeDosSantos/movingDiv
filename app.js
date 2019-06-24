console.log('hello-world')
var img = new Image();
img.src = "./2x2.png";
console.log(img)

var desx = 50; var desy = 50;
var click = false;
var pageX,pageY,posx,posy;

//var posx = 40 + "px";
//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
//document.getElementById("div").style.left = '40px';
function contex(){
    var canvas = document.getElementById('my')
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
}

function onMouseMove(event){
    pageX = event.pageX
    pageY = event.pageY
    console.log(pageX,pageY) 
}

function trueOrFalse(){
    if(click == false){
        click = true;
    } 
    else if(click == true){
        click = false;
    }
}

function mouseStick(event){
    if(click == true){
        onMouseMove(event);
        posx = (pageX - desx) + "px";
        posy = (pageY - desy) + "px";
        document.getElementById("div").style.left = posx;
        document.getElementById("div").style.top = posy;
    } else {
        //dont do anything
    }
  
}

function mouseStick2(event){
    if(click == true){
        onMouseMove(event);
        posx = (pageX - desx) + "px";
        posy = (pageY - desy) + "px";
        document.getElementById("div2").style.left = posx;
        document.getElementById("div2").style.top = posy;
    } else {
        //dont do anything
    }
  
}
function mouseStick3(event){
    if(click == true){
        onMouseMove(event);
        posx = (pageX - desx) + "px";
        posy = (pageY - desy) + "px";
        document.getElementById("div3").style.left = posx;
        document.getElementById("div3").style.top = posy;
    } else {
        //dont do anything
    }
  
}
function mouseStick4(event){
    if(click == true){
        onMouseMove(event);
        posx = (pageX - desx) + "px";
        posy = (pageY - desy) + "px";
        document.getElementById("div4").style.left = posx;
        document.getElementById("div4").style.top = posy;
    } else {
        //dont do anything
    }
  
}









