canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color="black";
var widthofline = 7 ;
var mouseEvent="";
var lastposx="";
var lastposy="";
var cx = "";
var cy = "";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("textinputcolor").value;
    widthofline = document.getElementById("widthoflineinput").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
function clear(){
ctx.clearRect(0 ,0 ,canvas.width ,canvas.height);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cx=e.clientX - canvas.offsetLeft;
    cy=e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.linewidth = widthofline;
        ctx.moveTo(lastposx,lastposy);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lastposx = cx;
    lastposy = cy;
}