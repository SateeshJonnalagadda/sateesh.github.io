// Set up the canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Snowflake properties
const snowflakeCount = 200;
const maxSpeed = 2;
const maxSize = 5;

// Create snowflakes
const snowflakes = [];
for (let i = 0; i < snowflakeCount; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * maxSize + 1,
    speed: Math.random() * maxSpeed + 0.5,
    wind: Math.random() * 0.5 - 0.25 // Add a slight wind effect
  });
}

// Draw and animate snowflakes
function drawSnowflake(snowflake) {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#000';
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach(snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.wind;

    if (snowflake.y > canvas.height) {
      snowflake.y = -snowflake.radius;
      snowflake.x = Math.random() * canvas.width;
    }

    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
}

animate();
