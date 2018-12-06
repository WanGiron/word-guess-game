
// -------------------------------------------------------
// Variables
// -------------------------------------------------------
var wordCounter = 0;
var lifes = 10;
var lettersInRandomFruit = [];
var lettersGuessedRight = [];
var lettersGuessedWrong = [];
var wordsDiv = document.getElementById("words-here");
// console.log(wordsDiv);
var guessedWrong = document.getElementById("guessed-wrong");
var fruits = ['balbasaur', 'blastoise', 'venusaur', 'charmander', 'caterpie','charizard','squirtle','pidgeotto', 'ekans', 'pikachu',
'raichu', 'nidoran', 'vulpix', 'jiglypuff', 'zubat', 'psyduck', 'arcanine', 'geodude', 'golem', 'slowpoke', 'gengar', 'onix',
'koffing', 'magikarp', 'eevee', 'moltres', 'mewtwo', 'articuno', 'zapdos', 'fennekin', 'greninja', 'pancham', 'malamar', 'zygarde', 'xernas',
'yveltal', 'sceptile', 'sharkpedo', 'bagon', 'latias', 'rayquaza','blaziken', 'lucario', 'infernape'];
var randomfruit = getRandomFruit();
// console.log(randomfruit);
var newArray = randomfruit.split('');
var string = newArray.join(' ');

   


// -------------------------------------------------------
// Function Calls
// -------------------------------------------------------
generateUnderscore();

// -------------------------------------------------------
// Function Definitions
// -------------------------------------------------------

function audioEffect(){
    var sound1 = document.getElementById("effectSound");
    sound1.play();
}

function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
};

function pushFruit() {
    wordsDiv.innerHTML = randomfruit;
}

function generateUnderscore() {
    for (var i = 0; i < randomfruit.length; i++) {
        lettersInRandomFruit.push('_');
    }
    wordsDiv.innerHTML = lettersInRandomFruit.join(' ');
};


// -------------------------------------------------------
// Function Definitions
// -------------------------------------------------------
document.addEventListener('keyup', function(keyEvent) {
    var letter = keyEvent.key;
    var index = randomfruit.indexOf(letter);

    if (index > -1) {
        // TODO: replace every place where "letter" is found in lettersInRandomFruit
        randomfruit.split('').forEach(
            (l, i) => {
                if (l === letter) {
                    lettersInRandomFruit[i] = letter;
                }
            } 
        );
        // TODO: add letter to lettersGuessedRight
        lettersGuessedRight.push(letter);
        
        // TODO: presentation (draw div with new data)
        wordsDiv.innerHTML = lettersInRandomFruit.join(' ');


        //  TODO: VERIFY  values and reload file
        var words2 = wordsDiv.innerHTML = lettersInRandomFruit.join(' ');
        if (words2===string){
            
            if(confirm('YOU GOT...' + randomfruit)){
            window.location.reload();
        }  
         
     }     
       
    } 
    
    else {
        // TODO: add letter to lettersGuessedWrong
        lettersGuessedWrong.push(letter);

        // TODO: present letter guessed wrong
        guessedWrong.innerHTML = lettersGuessedWrong.join(' ');

        lifes --;
        document.getElementById('lifes-left').innerHTML = lifes;
        
            
    }  

    // Play again 
    if(lifes===0) {
    if(confirm(' OOPS Try again!')){
            window.location.reload();
        }    
}      

   
    
});

