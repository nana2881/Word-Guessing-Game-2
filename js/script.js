const inputs = document.querySelector(".inputs");
resetBtn= document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
guessLeft = document.querySelector(".guess-left span");
wrongLetter = document.querySelector(".wrong-letter span");
typingInput = document.querySelector(".typing-input");



let word, maxGuesses, corrects = [], incorrects =[];




function randomWord(){
    // getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    // getting word of random object
      word = ranObj.word; 
      maxGuesses = 8; corrects = []; incorrects =[];

    hint.innerText = ranObj.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;



    let html = "";
    for (let i = 0; i < word.length; i++){
        html += '<input type="text">';
    }

    inputs.innerHTML = html;
}
randomWord();

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)&& !incorrects.includes('${key}') && !corrects.includes(key) ){
        if(word.includes(key)){
            for(let i = 0; i < word.length; i++){
                if (word[i] === key) {
                    corrects.push();
                    inputs.querySelectorAll("input")[i].value = key;
                } 
            }

        }else{
            maxGuesses--;
            incorrects.push('$(key)');
        }
        guessLeft.innerText = maxGuesses;
        wrongLetters.innerText = incorrects;
    }
    
    typingInputs.value = "";

    setTimeout(() =>{
        if (corrects.length === word.length) {
        alert("Congrats! You found the world ${word.toUpperCase}");
        randomWord(); // calling randomWord func, so the game reset
    } else if(maxGuesses < 1) { // if user couldn't found all letters
        alert("Game over! You don't have remaining guesses");
        for(let i = 0; i < word.length; i++){
            inputs.querySelectorAll("input")[i].value = word[i];
            }
    }
    });
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput());
document.addEventListener("keydown", () => typingInput.focus());

