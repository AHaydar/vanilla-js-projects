let container = document.getElementById('container');
container.addEventListener('mouseenter', function(event){
    let dot = document.querySelector('.dot');
    if(dot === null){
        dot = document.createElement('span');
        dot.setAttribute('class', 'dot');
        container.appendChild(dot);
    }
});

container.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;
    updateDotLocation(x, y);
    // container.innerHTML = "X coords: " + x + ". Y coords : " + y;
});

function updateDotLocation(x, y){
    let dot = document.querySelector('.dot');
    dot.style.position = "absolute";
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
}