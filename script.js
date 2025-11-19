// function play(){
//     // console.log('play now');
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
    
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden') 
// }

//Another way
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed);
    
    const getCurrentText = document.getElementById('current-text');
    const currentText = getCurrentText.innerText;
    const text = currentText.toLowerCase();
    console.log(playerPressed,text);
    
    if(playerPressed == text){
        console.log('You got a point');
        
        const currentScore = getTextElementById('current-score');
        const updatedScore = currentScore + 1;
        setValueById ('current-score',updatedScore);

        
        // //1. get the current score
        // const currentScore = document.getElementById('current-score');
        // const currentScoreText = currentScore.innerText;
        // const scoreToNumber = parseInt(currentScoreText);

        // //2.increase the score by 1
        // const newScore = scoreToNumber + 1;

        // //3. set the score
        // currentScore.innerText = newScore;


        removeBackgroundColorById(text);
        continueGame();
    }
    else{
        console.log('You are not alive');
        const currentLife = getTextElementById('current-life');
        const newLife = currentLife - 1;
        setValueById('current-life',newLife);

        if(newLife === 0){
            gameOver()
        }

        // const currentLife = document.getElementById('current-life');
        // const currentLifeText = currentLife.innerText;

        // const lifeToNumber = parseInt(currentLifeText);

        // const newLife = lifeToNumber - 1;

        // currentLife.innerText = newLife;
    }
    // else{
    //     hideElementById('play-ground')
    //     showElementById('score-page')
    // }
    
}

document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const getCurrentText = document.getElementById('current-text');
    getCurrentText.innerText = alphabet;

    addBackgroundColorById(alphabet);
    
}

function play (elementId){
    hideElementById('home-screen');
    hideElementById('score-page')
    showElementById('play-ground');

    setValueById ('current-score', 0)
    setValueById ('current-life', 3)
    


    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('score-page');

    const lastScore = getTextElementById('current-score');
    setValueById ('final-score',lastScore)
}
