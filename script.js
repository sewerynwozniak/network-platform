const btnStart = document.querySelector('.section__btn--start');
const btnRestart = document.querySelector('.section__btn--restart');
const counterArea = document.querySelector('.section__counter');
const outputArea = document.querySelector('.section__output');
const outputImagesArea = document.querySelector('.section__images');
const scoreArea = document.querySelector('.section__score');
const rockPaperScissorsIcons = document.querySelectorAll('.section__img');
const popup = document.querySelector('.header__popup');
const alert = document.querySelector('.section__alert');

let computerMove = '';
let playerMove = '';
let computerScore =0;
let playerScore =0;
let number=3;
let winner =''

//click start
btnStart.addEventListener('click',startRound);

// click restart
btnRestart.addEventListener('click',restartGame);


function startRound(){
//make player select item before start
if(playerMove ==''){
  
    alert.style.animation='wiggleAnimation 0.5s ease-out';
    alert.style.opacity =1;
   
    setTimeout(function(){
        alert.style.animation='';
    },800)
    
}else{

    alert.style.animation='';
    alert.style.opacity =0;
    counter();
    computerMovefunction();
    check();
    display();
    clearAfterOneRound();
    displayPopup();
    disableButtons()
    
}}


function counter(){

counterArea.textContent=number;
number--;    

let counterInterval = setInterval(function(){
  
    if(number===0){
        clearInterval(counterInterval);
        counterArea.textContent='';
        number=3;
    }
    else{
        counterArea.textContent=number;
        number--;
    } 

},1000)
}

//function generates computer's move
function computerMovefunction(){

let options = ['rock', 'paper', 'scissors'];

let randomNumber = Math.floor(Math.random()*3);

computerMove = options[randomNumber]
}



//function check
function check(){
    setTimeout(function(){
     
       //ties
       if(computerMove == 'rock' && playerMove == 'rock'){
           winner='tie';
           computerScore++;
           playerScore++;
           scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }else if(computerMove == 'paper' && playerMove == 'paper'){
            winner='tie';
            computerScore++;
            playerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }else if(computerMove == 'scissors' && playerMove == 'scissors'){
            winner='tie';
            computerScore++;
            playerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }
       //computer wins

       else if(computerMove == 'scissors' && playerMove == 'paper'){
            winner='computer';
            computerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
        }else if(computerMove == 'paper' && playerMove == 'rock'){
            winner='computer';
            computerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }else if(computerMove == 'rock' && playerMove == 'scissors'){
            winner='computer';
            computerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }
       //player wins
       else if(computerMove == 'scissors' && playerMove == 'rock'){
            winner='player';
            playerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
        }else if(computerMove == 'paper' && playerMove == 'scissors'){
            winner='player';
            playerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }else if(computerMove == 'rock' && playerMove == 'paper'){
            winner='player';
            playerScore++;
            scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;
       }
    },3000)
}

//display
function display(){

    outputImagesArea.innerHTML ='';
    outputImagesArea.style.opacity =0;
    outputImagesArea.style.animation='';
    outputImagesArea.innerHTML += `<img class="section__img--output" src="./images/${playerMove}.svg" alt="${playerMove}"></img>`
    outputImagesArea.innerHTML += `<img class="section__img--output" src="./images/${computerMove}.svg" alt="${computerMove}"></img>`
    
    setTimeout(function(){
        
        outputImagesArea.style.animation='wiggleAnimation 0.5s ease-out';
        outputImagesArea.style.opacity =1;
        scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;

    },3000)
}

// display popup
function displayPopup(){

popup.style.animation = '';

setTimeout(()=>{
let resulText ='';    
if(winner == 'tie'){
resulText = 'tie';
}else{
resulText = `${winner} wins`;
}
popup.textContent = resulText; 
popup.style.animation = 'slideDownAnimation 4s ease-out';

},3000)
}


//clear values and selected icon after one round
function clearAfterOneRound(){
    
    setTimeout(function(){

        playerMove = '';
     
        //remove class  section__img--clicked
           rockPaperScissorsIcons.forEach((e)=>{
               if(e.classList.contains('section__img--clicked')){
                e.classList.remove('section__img--clicked')
               }
            })

            rockPaperScissorsIcons.forEach((j)=>{
                j.style.pointerEvents = 'auto'})

    },3000)
    
}

// player choice

    rockPaperScissorsIcons.forEach((i,index)=>{
        
        i.addEventListener('click', (e)=>{
            //if player clicked again set move to nempy string
          if(playerMove!=''){

            playerMove = '';

          }else{

            switch(index){
                case 0:
                playerMove = 'rock';
                break;
                case 1:
                playerMove = 'paper';
                break;
                case 2:
                playerMove = 'scissors';
                break;
            
            }}

          
        //mark clicked icon
            rockPaperScissorsIcons[index].classList.toggle('section__img--clicked');
            
            
         //iterate to unable selecting more than one icon 
            rockPaperScissorsIcons.forEach((k)=>{
                k.style.pointerEvents = 'auto'
          
            if(![...k.classList].includes('section__img--clicked')){
                k.style.pointerEvents = 'none'
            }

            if([...rockPaperScissorsIcons].every(el=>!el.classList.contains('section__img--clicked'))){   
                rockPaperScissorsIcons.forEach((j)=>{
                    j.style.pointerEvents = 'auto'})
            }  


    })})})


    //function restart

    function restartGame(){

    computerScore = 0;
    playerScore = 0;

    outputImagesArea.innerHTML = '';
    scoreArea.innerHTML = `<p>${playerScore}</p> <p>${computerScore}</p>`;

    alert.style.animation='';
    alert.style.opacity =0;

    }


    //disable buttons during counting

    function disableButtons(){

        btnStart.classList.add('disabled');
        btnRestart.classList.add('disabled');

        setTimeout(function(){
             
        btnStart.classList.remove('disabled');
        btnRestart.classList.remove('disabled');

        },3000)

    }