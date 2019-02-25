document.getElementById('search-submit').onclick = function(e){

    //Get pattern
    const pattern = document.getElementById('pattern').value;
    if(pattern) {
        const re = new RegExp(pattern, 'g');

        //Get string
        const searchString = document.getElementById('incoming').value
        
        // replace 
        const resultString = '<pre>' + searchString.replace(re, `<span class='highlight'>$&</span>`) + '</pre>';
        
        //insert into page
        document.getElementById('search-result').innerHTML = resultString;
    } else {
        console.log("Please enter a search pattern");
    }
    

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