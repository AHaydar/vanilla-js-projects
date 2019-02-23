document.getElementById('search-submit').onclick = function(e){

    //Get pattern
    const pattern = document.getElementById('pattern').value;
    const re = new RegExp(pattern, 'g');

    //Get string
    const searchString = document.getElementById('incoming').value
    
    let matchArray;
    let resultString = '<pre>';
    let first = 0;
    let last = 0;

    //find each match
    while((matchArray = re.exec(searchString)) != null) {
        last = matchArray.index

        // get all of string up to match, concatenate
        resultString += searchString.substring(first, last);
        // add matched with class
        resultString += `<span class="highlight">${matchArray[0]}</span>`;
        first = re.lastIndex;
    }

    // finsish off the String
    resultString += searchString.substring(first, searchString.length);
    resultString += '</pre>'
    
    //insert into page
    document.getElementById('search-result').innerHTML = resultString;

};

/*
See the kitten on the wall, sporting with the leaves that fall,
Withered leaves—one—two—and three, from the lofty elder-tree!
Through the calm and frosty air, of this morning bright and fair . . .
—But the kitten, how she starts; Crouches, stretches, paws, and darts!

First at one, and then its fellow, just as light and just as yellow;
There are many now—now one—now they stop and there are none;
What intenseness of desire, in her upward eye of fire!

With a tiger-leap half way, now she meets the coming prey,
Lets it go as fast, and then, has it in her power again:
Now she works with three or four, like an Indian Conjuror;
Quick as he in feats of art, far beyond in joy of heart.
*/