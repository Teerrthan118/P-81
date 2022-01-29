canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(125, 147, 330, 200);
ctx.stroke();

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(290, 200, 40, 0, 2*Math.PI);
ctx.stroke();


color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(245, 255, 40, 0, 2*Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(380, 200, 40, 0, 2*Math.PI);
ctx.stroke();


color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(335, 255, 40, 0, 2*Math.PI);
ctx.stroke();