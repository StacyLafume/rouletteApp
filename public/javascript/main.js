let redPick = document.getElementById('red')
let blackPick = document.getElementById('black')
let greenPick = document.getElementById('green')


function checkWin (ballResult) {
  let userBetChoice = document.getElementById('userBetChoice').innerHTML
  console.log(userBetChoice, ballResult[1])
  if (ballResult[1] === userBetChoice){
    return true
  }
  else{
    return false
  }
}

document.getElementById('spin').addEventListener("click", function (){
    let ballResult = getBallResult()
    let result = checkWin(ballResult,userBetChoice)
    addMoneySubMoney(result)
})






redPick.addEventListener('click',function(){
    document.getElementById('userBetChoice').innerHTML =  red.value
})

blackPick.addEventListener('click',function(){
 document.getElementById('userBetChoice').innerHTML = blackPick.value
})

greenPick.addEventListener('click',function(){
  document.getElementById('userBetChoice').innerHTML = greenPick.value
})

//resets the game and deletes the docuement in mongodb
let reset = document.getElementById('reset')
reset.addEventListener('click', function() {
  console.log("client side called")
  fetch('bet', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'bet':parseInt(document.getElementById('userB').textContent)
        })
      }).then(function (response) {
        console.log(response)
        if(response.ok){
          return response.json()
        }else{
          console.log("could not delete")
        }
      }).then(function (data) {
        window.location.reload()
      })
})




function getBallResult(){
    let result = Math.ceil(Math.random()*38)
    let ballDrop = []
    if (result === 1) {
      return ballDrop = [0 && "green"]
    }
    else if (result === 2){
      return ballDrop = [00,"green"]
    }
    else if (result === 3){
      return ballDrop = [ 1, "red"]
    }
    else if (result === 4){
      return ballDrop = [ 2,"black"]
    }
    else if (result === 5){
      return ballDrop = [ 3,"green"]
    }
    else if (result === 6){
      return ballDrop = [ 4,"black"]
    }
    else if (result === 7){
      return ballDrop = [ 5,"red"]
    }
    else if (result === 8){
      return ballDrop = [ 6,"black"]
    }
    else if (result === 9){
      return ballDrop = [ 7,"red"]
    }
    else if (result === 10){
      return ballDrop = [ 8,"black"]
    }
    else if (result === 11){
      return ballDrop = [ 9,"red"]
    }
    else if (result === 12){
      return ballDrop = [10,"black"]
    }
    else if (result === 13){
      return ballDrop = [11,"black"]
    }
    else if (result === 14){
      return ballDrop = [12,"red"]
    }
    else if (result === 15){
      return ballDrop = [13,"black"]
    }
    else if (result === 16){
      return ballDrop = [14,"red"]
    }
    else if (result === 17){
      return ballDrop = [15,"black"]
    }
    else if (result === 18){
      return ballDrop = [16,"red"]
    }
    else if (result === 19){
      return ballDrop = [17,"black"]
    }
    else if (result === 20){
      return ballDrop = [18,"red"]
    }
    else if (result === 21){
      return ballDrop = [19,"red"]
    }
    else if (result === 22){
      return ballDrop = [20,"black"]
    }
    else if (result === 23){
      return ballDrop = [21,"red"]
    }
    else if (result === 24){
      return ballDrop = [22,"black"]
    }
    else if (result === 25){
      return ballDrop = [23,"red"]
    }
    else if (result === 26){
      return ballDrop = [24,"black"]
    }
    else if (result === 27){
      return ballDrop = [25,"black"]
    }
    else if (result === 28){
      return ballDrop = [26,"black"]
    }
    else if (result === 29){
      return ballDrop = [27,"red"]
    }
    else if (result === 30){
      return ballDrop = [28,"black"]
    }
    else if (result === 31){
      return ballDrop = [29,"black"]
    }
    else if (result === 32){
      return ballDrop = [30,"red"]
    }
    else if (result === 33){
      return ballDrop = [31,"black"]
    }
    else if (result === 34){
      return ballDrop = [32,"red"]
    }
    else if (result === 35){
      return ballDrop = [33,"black"]
    }
    else if (result === 36){
      return ballDrop = [34,"red"]
    }
    else if (result === 37){
      return ballDrop = [35,"black"]
    }
    else if (result === 38){
      return ballDrop = [36,"red"]
    }
}




function addMoneySubMoney(win){
  let amount = document.getElementById('userCashBet').value
  console.log(amount)
  console.log(win);
  if (win) {
    fetch('winBet', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'amount': amount,
        'bet':parseInt(document.getElementById('userB').textContent)
      })
    }).then(response => {
      if (response.ok) return response.json()
    }).then(data => {
      console.log(data)
      window.location.reload(true)
    })
  }else{
    fetch('lossBet', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'amount': amount,
        'bet': parseInt(document.getElementById('userB').textContent)
      })
    }).then(response => {
      if (response.ok) return response.json()
    }).then(data => {
      console.log(data)
      window.location.reload(true)
    })
  }
}
