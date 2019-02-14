let container = document.querySelector('#container');
document.addEventListener('keydown', function(event) {
    let keyCode = document.querySelector('.key-code');
    console.log(keyCode);
    if(keyCode !== null){
        keyCode.remove();
    }
    container.setAttribute('class', 'align-content-vertical');
    let theKeyCode = document.createElement('label');
    theKeyCode.setAttribute('class', 'key-code')
    theKeyCode.innerText=event.keyCode;
    container.appendChild(theKeyCode);
});