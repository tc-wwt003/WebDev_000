const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// fill the whole canvas with blue
ctx.fillStyle='blue';
ctx.fillRect(0, 0, 300, 150);

// fill green rectangle for the grass
ctx.fillStyle='green';
ctx.fillRect(0,120,300,30);

// house
ctx.fillStyle='orange';
ctx.fillRect(30,50,100,80);

// roof
ctx.fillStyle='red';
ctx.moveTo(80,10);
ctx.lineTo(150,50);
ctx.lineTo(10,50);
ctx.fill();

// door
ctx.fillStyle='black';
ctx.strokeRect(50,80,30,50);

// optional extras
// window
ctx.fillStyle='black';
ctx.strokeRect(95,80,20,20);
ctx.moveTo(105,80);
ctx.lineTo(105,100);
ctx.stroke();
ctx.moveTo(95,90);
ctx.lineTo(115,90);
ctx.stroke();

// attic window
ctx.beginPath();
ctx.arc(80,35,13,0,8);
ctx.stroke();
// finish cross bars :P