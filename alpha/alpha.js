// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyBoardKeyUp(event) {

    const playerPressed = event.key;
    console.log(playerPressed);
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // console.log(event.key);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedPress = currentAlphabet.toLowerCase();



    // console.log(expectedPress,playerPressed)

    // check

    if (playerPressed === expectedPress) {
        console.log('you got a point', expectedPress);

        const currentScore = getTextElementById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueId('current-score',updateScore);










        // .......................................
        // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // //    increase the score
        // const newScore = currentScore + 1;
        // // update score
        // currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedPress);
        continueGame();

    }
    else {
        console.log('you have lost life')

       const currentLife = getTextElementById('current-life');
       const updateLife = currentLife - 1;
       setTextElementValueId('current-life',updateLife);
       if(updateLife === 0){
        gameOver()
       }






        // // get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // reduce the life count
        // const newLife = currentLife - 1;

        // // display the updated life count
        // currentLifeElement.innerText = newLife;

    }

}

document.addEventListener('keyup', handleKeyBoardKeyUp)

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set backgroundColor
    setBackgroundColorById(alphabet);

}

function play() {

    hideElementById('home-screen');
    setElementById('play-ground');
    hideElementById('final-score')
    continueGame();
//    reset score and life
setTextElementValueId('current-life',3);
setTextElementValueId('current-score',0);
}
function gameOver(){
    hideElementById('play-ground');
    setElementById('final-score')
    const lastScore = getTextElementById('current-score')
    setTextElementValueId ('last-score',lastScore)
    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
