const inputs = document.querySelector(".inputs");
resetBtn= document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
typingInput = document.querySelector(".typing-input");




function randomWord(){
    // getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    // getting word of random object
      word = ranObj.word; 
    console.log(word);



    hint.innerText = ranObj.hint;



    let html = "";
    for (let i = 0; i < word.length; i++){
        html += '<input type="text" disabled>';
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
            console.log("Letter not found");
        }
    }
    
    typingInputs.value = "";
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());