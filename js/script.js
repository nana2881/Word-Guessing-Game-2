const inputs = document.querySelector(".inputs");
resetBtn= document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
wrongLetter = document.querySelector(".wrong-letter span")
typingInput = document.querySelector(".typing-input");



let word, incorrects = [];




function randomWord(){
    // getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    // getting word of random object
      word = ranObj.word; 
    console.log(word);



    hint.innerText = ranObj.hint;



    let html = "";
    for (let i = 0; i < word.length; i++){
        html += '<input type="text">';
    }

    inputs.innerHTML = html;
}
randomWord();

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)){
        console.log(key);

        if(word.includes(key)){
            for(let i = 0; i < word.length; i++){

                if (word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }

        }else{
            incorrects.push('$(key)');
        }
    }
    wrongLetters.innerText = incorrects;
    typingInputs.value = "";
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());