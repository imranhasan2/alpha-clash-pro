// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyBoardKeyUp(event){

    const playerPressed = event.key;
    // console.log(event.key);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedPress = currentAlphabet.toLowerCase();



    // console.log(expectedPress,playerPressed)

    // check

    if(playerPressed === expectedPress){
        console.log('you got a point', expectedPress);
        removeBackgroundColorById(expectedPress);
        continueGame();

    }
    else{
        console.log('you have lost life')
    }

}

document.addEventListener('keyup',handleKeyBoardKeyUp)

function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set backgroundColor
    setBackgroundColorById(alphabet);

}
 
function play(){
    hideElementById('home-screen');
    setElementById('play-ground');
    continueGame();
}
