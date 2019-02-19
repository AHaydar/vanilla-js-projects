const inputBox = document.querySelector('.search-box');
let paragraph = document.querySelector('.paragraph');
const originalParagraphText = paragraph.innerHTML;
document.addEventListener('input', function(e){
    paragraph.innerHTML = originalParagraphText;
    let valueSearched = inputBox.value;
    //Highlight the value in paragraph
    if(valueSearched !== ''){
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

//               ____________      |||||||
//              /___________/|    ( -   - )
//              |           |         -
