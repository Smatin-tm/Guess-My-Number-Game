'use district';

let againBtn = document.querySelector('.btn-again');

let guessMyNum = document.querySelector('.guess-text');

let show = document.querySelector('.show');

let resultText = document.querySelector('.result-text');

let labelScore = document.querySelector('.label-score');
let score = document.querySelector('.score');

let highScore = document.querySelector('.high-score');

let enterNumber = document.querySelector('.type-number');

let checkBtn = document.querySelector('.check-btn');
let bodybg = document.querySelector('body');
let header = document.querySelector('header');
let main = document.querySelector('main');
let alertBox = document.querySelector('.alertBox');

let input=document.querySelector('input');

let highScoreNum = document.querySelector('.high-scoreNum');

let correctDijit = Math.trunc(Math.random()*20)+1;


let dicreaseScore = 20;
let minimumScore= 5;

checkBtn.addEventListener('click', function(){

    let enterNumber = Number(document.querySelector('.type-number').value);
    if(!enterNumber){
        input.classList.add('outline');
        alert('YOU DIDN`T TYPE YOUR GUESS');

    }

    else if(dicreaseScore<minimumScore){
        resultText.textContent= '💥 You lost the game';
        show.textContent='💥'
        highScoreNum.textContent= 0;
        score.textContent= 0;
        document.getElementById('cursorBtn').style.cursor= 'not-allowed';
        document.getElementById('cursor').style.cursor= 'not-allowed';
        bodybg.style.background='linear-gradient(to right, rgb(255, 51, 0), rgb(170, 0, 0))';
        
        if(dicreaseScore>minimumScore){
            resultText.textContent= 'You`re too high! ⬆';
        }
    }

    
    

    else if(enterNumber>correctDijit){
        resultText.textContent='You`re too high! ⬆';
        show.textContent='❌'
        bodybg.style.background='linear-gradient(to right, rgb(18, 48, 58), rgb(6, 6, 78))';
        dicreaseScore=dicreaseScore-4;
        score.textContent= dicreaseScore;

    }
    else if(enterNumber<correctDijit){
        resultText.textContent='You`re too down! ⬇';
        show.textContent='❌'
        bodybg.style.background='linear-gradient(to right, rgb(18, 48, 58), rgb(6, 6, 78))';
        dicreaseScore=dicreaseScore-4;
        score.textContent= dicreaseScore;
    } 
  
    else if(enterNumber===correctDijit){
        bodybg.style.background='linear-gradient(to right, #A3DA8D, #1C7947)'
        resultText.textContent = 'Correct Guess! ✅';
        show.textContent=correctDijit;
        highScoreNum.textContent= dicreaseScore;
        document.getElementById('cursorBtn').style.cursor= 'not-allowed';
        document.getElementById('cursor').style.cursor= 'not-allowed';

    } 
    
})

againBtn.addEventListener('click', ()=>{

    dicreaseScore = 20;
    minimumScore= 5;

    correctDijit = Math.trunc(Math.random() * (dicreaseScore-minimumScore) +minimumScore);
    console.log(correctDijit);

        resultText.textContent= 'Start guessing...';
        show.textContent='?'
        highScoreNum.textContent= 0;
        score.textContent= dicreaseScore;
        document.getElementById('cursorBtn').style.cursor= 'pointer';
        document.getElementById('cursor').style.cursor= 'auto';
        enterNumber.value='';
        bodybg.style.background='linear-gradient(to right, rgb(18, 48, 58), rgb(6, 6, 78))';
        input.classList.remove('outline');

        
        
} )






 