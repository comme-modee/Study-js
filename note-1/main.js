let computerNum = 0;
let playBtn = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resetBtn = document.getElementById("reset-button");
let result = document.getElementById("result");
let chances = 5;
let gameOver = false;
let chanceText = document.getElementById("chances-text");
let history = [];


playBtn.addEventListener("click",play);
resetBtn.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value = "";
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1; //random은 0~1사이의 값이 랜덤으로 나온다.
    console.log("정답",computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){
        result.textContent = "1부터 100 사이의 숫자를 입력해주세요."
        return;
    }
    if(history.includes(userValue)){
        result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }
    chances -- ;
    chanceText.textContent = `남은 기회: ${chances}번`;

    if(userValue < computerNum){
        result.textContent = "UP!!!"
    } else if(userValue > computerNum){
        result.textContent = "DOWN!!!"
    } else{
        result.textContent = "정답!!! 쫌 천잰데?!"
        chanceText.textContent = ""
        gameOver = true;
    }

    history.push(userValue);

    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playBtn.disabled = true;
    }
    
}

function reset(){
    userInput.value = "";
    pickRandomNum();
    gameOver = false;
    chances = 5;
    playBtn.disabled = false;
    chanceText.textContent = `남은 기회: ${chances}번`;
    history = [];
    result.textContent = "다시 도전!! 숫자를 입력하세요!";
}

pickRandomNum();