// Get all buttons on the page
let buttons = document.getElementsByTagName('button');

// convert the html collection returned to array
let buttonsArray = [...buttons];

// for each button in the array add event lister that retrieves the corresponding audio tag and plays it
buttonsArray.forEach(function playAudio(htmlButton) {
    htmlButton.addEventListener('mouseover', function(e){
        htmlButton.style.backgroundColor = 'white';
    });

    htmlButton.addEventListener('mouseout', function(e){
        htmlButton.style.backgroundColor = 'bisque';
    });

    htmlButton.addEventListener('click', function (e) {
        e.preventDefault();
        htmlButton.style.borderColor = 'green';
        let audio = htmlButton.querySelector('audio');
        audio.play();
    });
})