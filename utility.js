function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(showElementId){
    const showElement = document.getElementById(showElementId);
    showElement.classList.remove('hidden');
}

function getARandomAlphabet (){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split(''); 
    // console.log(alphabet);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

function addBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getTextElementById (elementId){
    const getId = document.getElementById(elementId);
    const elementValueText = getId.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setValueById (elementId,value){
    const getId = document.getElementById(elementId);
    getId.innerText = value;
}