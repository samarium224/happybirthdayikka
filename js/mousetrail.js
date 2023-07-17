const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#6db5ff",
    "#7aaeff",
    "#85a7ff",
    "#8da2ff",
    "#969cff",
    "#9c98ff",
    "#a890ff",
    "#ad8cff",
    "#b780ff",
    "#bc7dff",
    "#c17aff",
    "#c676ff",
    "#cc70ff",
    "#d266ff",
    "#d85dff",
    "#de57ff",
    "#e04eff",
    "#e746ff",
    "#eb40ff",
    "#f13bff",
    "#f33fff",
    "#f53aff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
