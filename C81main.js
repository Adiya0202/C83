var mouseEvent="";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
lw=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  color=document.getElementById("color").value;

  lw=document.getElementById("lw").value;
  mouseEvent="mousedown"; 
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
  mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=lw;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(mouse_x,mouse_y);
    ctx.stroke();  
}
last_position_x=mouse_x;
last_position_y=mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var last_touch_x,last_touch_y;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
  document.getElementById("myCanvas").width=new_width;
  document.getElementById("myCanvas").height=new_height;
  document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
  color=document.getElementById("color").value;
  lw=document.getElementById("lw").value;
last_touch_x=e.touches[0].clientX-canvas.offsetLeft;
last_touch_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
  touch_x=e.touches[0].clientX-canvas.offsetLeft;
  touch_y=e.touches[0].clientY-canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=lw;
  ctx.moveTo(last_touch_x,last_touch_y);
  ctx.lineTo(touch_x,touch_y);
  ctx.stroke();
  last_touch_x=touch_x;
  last_touch_y=touch_y;
}