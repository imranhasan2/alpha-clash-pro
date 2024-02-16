function hideElementById(elementById){
    const element =document.getElementById(elementById);
    element.classList.add('hidden');

}

function setElementById (setElement){
const setelem =document.getElementById(setElement);
setelem.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getTextElementById(elementId){
    const element =document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}
function setTextElementValueId (elementId,value){
    const element =document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}


function getRandomAlphabet(){
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetStr.split('');
   const random =Math.random()*25;
//    console.log(random)

const index = Math.round(random);
const alphabet =alphabets[index];
// console.log( alphabet)
return alphabet;

}