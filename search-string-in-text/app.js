//Get the input element and print the text inside it
const inputBox = document.querySelector('.search-box');
document.addEventListener('keypress', function(e){
    if(e.code=="Enter") {
        let valueSearched = inputBox.value;    
        //Highlight the value in paragraph
        let paragraph = document.querySelector('.paragraph');
        let re = new RegExp(valueSearched, 'g');
        paragraph.innerHTML = paragraph.innerHTML.replace(re,`<span class='highlight'>${valueSearched}</span>`)
        
        //Uncomment the following line to use the highlight function instead of regex
        // paragraph.innerHTML = highlight(valueSearched, paragraph.innerHTML);
    }
});


function highlight(text, paragraph) {
    const index  = paragraph.indexOf(text);
    if(index > 0) {
        let paragraphHighlighted = paragraph.substring(0, index) + 
        "<span class='highlight'>" + 
        paragraph.substring(index, (index + 1) + text.length) +
        "</span>" + 
        paragraph.substring(index + 1 + text.length);
        return paragraphHighlighted;
    }
}