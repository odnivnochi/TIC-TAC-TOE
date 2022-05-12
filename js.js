let i = 0;

let gameBoard = ['', '', '', '', '', '', '', '', ''];
const img = () =>{
    if(i % 2 !== 0){
        
        let lifebuoy = document.createElement('img');
        lifebuoy.className = "imgLifebuoy"
        lifebuoy.src = "/lifebuoy.png"
        return lifebuoy
       
    
}else{
        let imgCross = document.createElement('img');
        imgCross.className = "imgCross"
        imgCross.src = "/cross.png"
        return imgCross

    }
}



document.querySelectorAll(".block").forEach(elem => elem.addEventListener("click",
 () => {


    if(i % 2 !== 0){
        
        elem.append(img())
        gameBoard[elem.title] = "O"
        console.log(gameBoard)
        elem.style.pointerEvents='none';
        i++
         check()
    }else{
        elem.append(img())
        gameBoard[elem.title] = "X"
        
        elem.style.pointerEvents='none';
        i++
         check()    
    }

    
  }));
  const check = () => {
    let message = document.querySelector('.message');
    let first = document.getElementById("input-first")
    let second = document.getElementById("input-second")
    let firstPlayer = document.querySelector(".firstPlayer")
    let secondPlayer = document.querySelector(".secondPlayer")

    if((gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") ||
    (gameBoard[3] === "X" && gameBoard[4] === "X"&& gameBoard[5] === "X") ||
    (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") ||
    (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") ||
    (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") ||
    (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") ||
    (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") ||
    (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X")){
        message.append(img())
        message.innerText = `${first.value} Win`;
        firstPlayer.style.backgroundColor = "#B4FF9F"
        secondPlayer.style.backgroundColor = "#EB5353"
        document.querySelectorAll(".block").forEach(elem => { elem.style.pointerEvents='none';})
        
        
    }else if((gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") ||
    (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") ||
    (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") ||
    (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") ||
    (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") ||
    (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") ||
    (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") ||
    (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O")){
        let first = document.querySelector(".firstPlayer")
       
        message.innerText = `${second.value} Win`;
        secondPlayer.style.backgroundColor = "#B4FF9F"
        firstPlayer.style.backgroundColor = "#EB5353"
        document.querySelectorAll(".block").forEach(elem => { elem.style.pointerEvents='none';})
    }else if(gameBoard[0] && gameBoard[1] && gameBoard[2] && gameBoard[3] &&
        gameBoard[4] && gameBoard[5] && gameBoard[6] && gameBoard[7] && gameBoard[8]){
            message.innerText = "DRAW"
            document.querySelectorAll(".block").forEach(elem => { elem.style.pointerEvents='none';})
    }
}
document.querySelector(".btnReset").addEventListener("click", () => {
    console.log("sda")
    i = 0;
    let firstPlayer = document.querySelector(".firstPlayer")
    let secondPlayer = document.querySelector(".secondPlayer")
    gameBoard = ['', '', '', '', '', '', '', '', '']
    document.querySelectorAll(".block").forEach(elem => { elem.style.pointerEvents='auto';
    elem.innerHTML = ""})
    let message = document.querySelector('.message').innerHTML = "Why win?"
    secondPlayer.style.backgroundColor = "#B4E197"
    firstPlayer.style.backgroundColor = "#B4E197"
})