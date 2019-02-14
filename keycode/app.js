let container = document.querySelector('#container');
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    let keyContainer = document.querySelector('.key-container');
    if(keyContainer !== null){
        keyContainer.remove();
    }
    keyContainer = document.createElement('div');
    keyContainer.setAttribute('class', 'key-container');
    container.setAttribute('class', 'align-content-vertical');
    container.appendChild(keyContainer);

    let theKeyName = document.createElement('label');
    theKeyName.setAttribute('class', 'key-name');
    theKeyName.innerText = event.key;
    keyContainer.appendChild(theKeyName);

    let theKeyCode = document.createElement('label');
    theKeyCode.setAttribute('class', 'key-code')
    theKeyCode.innerText=event.keyCode;
    keyContainer.appendChild(theKeyCode);
});