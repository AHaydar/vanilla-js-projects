// Get all buttons on the page
let buttons = document.getElementsByTagName('button');

// convert the html collection returned to array
let buttonsArray = [...buttons];

// for each button in the array add event lister that retrieves the corresponding audio tag and plays it
buttonsArray.forEach(function playAudio(htmlButton) {
    htmlButton.addEventListener('click', function (e) {
        let audio = htmlButton.querySelector('audio');
        audio.play();
    })
})