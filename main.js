var mouse_event = "empty";
var lastX, lastY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width=document.getElementById("width_of_line").value;

    mouse_event = "mouse_down";
    
}


canvas.addEventListener("mouseup", my_mouseup);


function my_mouseup(e){
    mouse_event="mouse_up";

}

canvas.addEventListener("mouseleave", my_mouseleave);


function my_mouseleave(e){
    mouse_event="mouse_leave";
    
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouse_down"){
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;

   console.log("last x and y are " + lastX + "&" + lastY);

   ctx.arc(current_x, current_y, 20, 0, 2*Math.PI);

   console.log("current x and y are " + current_x + "&" + current_y);
   ctx.stroke();
    }

    lastX = current_x;
    lastY = current_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


