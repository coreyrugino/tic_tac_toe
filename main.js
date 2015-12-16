function checkForWin(box){

  if ((box[0].innerHTML =='X' || box[0].innerHTML =='O') && box[0].innerHTML == box[1].innerHTML && box[1].innerHTML == box[2].innerHTML){
    alert('Winner');
    clearGame(boxes);
    }
  if ((box[3].innerHTML =='X' || box[3].innerHTML=='O') && box[3].innerHTML == box[4].innerHTML && box[4].innerHTML == box[5].innerHTML){
    alert('Winner');
    clearGame(boxes);
  }
  if ((box[6].innerHTML =='X' || box[6].innerHTML=='O') && box[6].innerHTML == box[7].innerHTML && box[7].innerHTML == box[8].innerHTML){
    alert('Winner');
    clearGame(boxes);
  }
  if ((box[0].innerHTML =='X' || box[0].innerHTML=='O') && box[0].innerHTML == box[3].innerHTML && box[3].innerHTML == box[6].innerHTML){
    alert('Winner');
    clearGame(boxes);
  }
  if ((box[1].innerHTML =='X' || box[1].innerHTML=='O') && box[1].innerHTML == box[4].innerHTML && box[4].innerHTML == box[7].innerHTML){
    alert('Winner');
    clearGame(boxes);
  }
  if ((box[2].innerHTML =='X' || box[2].innerHTML=='O') &&box[2].innerHTML == box[5].innerHTML && box[5].innerHTML == box[8].innerHTML){
    alert('Winner');
    clearGame(boxes);
  }
  if ((box[0].innerHTML =='X' || box[0].innerHTML=='O') && box[0].innerHTML == box[4].innerHTML && box[4].innerHTML == box[8].innerHTML){
    alert('Winner');
    clearGame(boxes);
  }
  if ((box[2].innerHTML =='X' || box[2].innerHTML=='O') &&box[2].innerHTML == box[4].innerHTML && box[4].innerHTML == box[6].innerHTML){
    alert('Winner');
    clearGame(boxes);
  };
  if (tclick == 9){
    alert('Cats Game!!!');
    clearGame(boxes);
  };
};

var playerOneName = prompt('What is your Name Player 1?');
var playerTwoName = prompt('What is your Name Player 2?');
document.getElementById('player_one_name').innerHTML = "Player one: " + playerOneName;
document.getElementById('player_two_name').innerHTML = "Player two: " + playerTwoName;

var boxes = document.getElementsByClassName('tic-tac-toe-box');
console.log(boxes);
var tclick = 0;
for(var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
      box.addEventListener('click', function() {
      if (tclick%2 == 0 && this.innerHTML != 'X' && this.innerHTML != 'O'){
        this.innerHTML = 'X';
        tclick++;
        checkForWin(boxes);
      } else if(this.innerHTML != 'X' && this.innerHTML != 'O'){
        this.innerHTML = 'O';
        tclick++;
        checkForWin(boxes);
      } else {
        alert('Box taken!');
      }

    });
  }

  function clearGame(box){
      box[0].innerHTML=('');
      box[1].innerHTML=('');
      box[2].innerHTML=('');
      box[3].innerHTML=('');
      box[4].innerHTML=('');
      box[5].innerHTML=('');
      box[6].innerHTML=('');
      box[7].innerHTML=('');
      box[8].innerHTML=('');
      tclick = 0;
  }

  function clearGame(box){
    for(var i = 0; i < boxes.length; i++) {
    box[i].innerHTML=('');
    }
    tclick = 0;
  } 
