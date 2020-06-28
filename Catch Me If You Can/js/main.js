/* var main = document.getElementById("main");
var students = ["CATCH ME IF YOU CAN"];

myForEach(students, createBTN);

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    callback(element, i);
  }
}

function createBTN(bonom, i) {
  var btn = document.createElement("button");
  btn.innerHTML = bonom;
  btn.addEventListener("click", function () {
    alert("Veut tu commencez ? ");
  });
  btn.style.backgroundColor = "white";
  btn.style.padding = "20px";
  main.appendChild(btn);
}


var winners = [
  { date: "08/16/2015", score: 512, name: "John Lennon" },
  { date: "10/27/2018", score: 496, name: "Paul McCartney" },
  { date: "01/02/2014", score: 317, name: "George Harrison" },
  { date: "05/30/2017", score: 278, name: "Ringo Starr" },
  { date: "07/23/2019", score: 226, name: "Mike Sabbah" },
]; */

/* var button = document.getElementById("myButton");
button.addEventListener("click", sayMyName);

function sayMyName() {
  setTimeout(function () {
    alert(this.id);
  }, 500);
  
} */


/* rect.style.top = Math.trunc(Math.random() * 550) + "px";
    rect.style.left = Math.trunc(Math.random() * 950) + "px"; */

///// COMMENCEMENT 


/* const scorevar = {

 score: 
 level: 
 
} */

var winners = [
  { date: "09/10/20", score: 800, name: "K" },
  { date: "05/10/20", score: 200, name: "A" },
  { date: "06/10/20", score: 100, name: "N" },
  { date: "04/10/20", score: 50, name: "T" },
  { date: "03/10/20", score: 30, name: "E" },
];

var winnersJSON = localStorage.getItem("allwinners") // var qui prend le fichier dans le local storage
if (winnersJSON != null) {
  winners = JSON.parse(winnersJSON)
}

function createHTML() {
  var toAppend = "";
  winners.forEach(winner => {
    toAppend += ` <div class="hsplayer">
<div class="date">
    ${winner.date}
</div>
<p> ${winner.name} : ${winner.score}</p>

</div>`
  })
  document.getElementById("highscoresdom").innerHTML = toAppend;
}

createHTML();

/*var winnersbyScore = [
{ date: winners[0].date , score: winners[0].score, name: winners[0].name },
{ date: winners[1].date , score: winners[1].score, name: winners[1].name },
{ date: winners[2].date , score: winners[2].score, name: winners[2].name },

]*/


var gameOn = false;

const initvar = {

  name: { val: "Player" },
  timer: null,
  sec: { val: 60, DOM: document.getElementById("timerdom") },
  score: { val: 0, DOM: document.getElementById("Scoredom") },
  level: { val: 0, DOM: document.getElementById("leveldom") },
  pointToNextLevel: { val: 10, DOM: document.getElementById("pointToNextLeveldom") },
  compteurblack: { val: 0, DOM: document.getElementById("missclicdom") },
  speed: { val: 2 },
  timeToEscape: { val: 2000 },
  date: { val: dateText }
  //date:
}







const functiontimer = {

  start: function () { // fonction pour start le timer
    console.log('timer go')
    initvar.timer = setInterval(() => {
      if (initvar.sec.val < 1) {
        clearInterval(initvar.timer);
        Endgame();
      }
      initvar.sec.val--;
      initvar.sec.DOM.innerHTML = initvar.sec.val;

    }, 1000);
  },

  stop: function () {
    clearInterval(initvar.timer);

  },
  reset: function () {
    initvar.sec.val = 60;
    initvar.sec.DOM.innerHTML = "60";
    initvar.sec.val = 1;
    initvar.sec.DOM.innerHTML = "60";
  }
}




function Endgame() { // fonction pour la fin du jeu & le prompt pour entre son nom
  console.log("Prompt de fin enter your name")
  if (initvar.score.val > winners[4].score) {
    var nameW = prompt("!!!! GOAL !!!! \n Entre ton nom")
  initvar.name.val = nameW
  var newWinners = {date: dateText, score: initvar.score.val, name : nameW};





  addwinners(newWinners);
  localSmaj();
  createHTML();
  }else{ 
    alert("YOU LOOSE")
  }
  
}

var D = new Date
var theDay = D.getDate();
var theMonth = D.getMonth() + 1;
var theYear = D.getFullYear();
var dateText = theDay + "/" + theMonth + "/" + theYear;

//winners.push(newWinners);

function addwinners(w) {
  console.log("addwinners")
  for (let i = 0; i < winners.length; i++) {
    const y = winners[i];
    if (w.score > y.score) {
      winners.splice(i, 1, w);
      break;
    }
  }


}
function localSmaj() { // MAJ LocalStorage
  console.log("MAJ LOCAL STORAGE")
  var winnersJSON = JSON.stringify(winners);
  localStorage.setItem("allwinners", winnersJSON);
}


var theClickme = document.getElementById("clickme");
var theClickboxblack = document.getElementById("boxblack");
var domSpanStart = document.getElementById("spanstart")

function fonctionStart() {
  document.getElementById("btnstart").innerHTML = "<h1>CLICK TO START !</h1>";

}

function fonctiononmouseout() {
  document.getElementById("btnstart").innerHTML = "<h1>GOAL ME IF YOU CAN !</h1>";
}

domSpanStart.addEventListener("click", start1)


function start1() {
  console.log("fonction start ouverte")
  var retourconfirm = confirm("Voulez-vous lancez le jeu ? \n !!!! HARD LEVEL !!!");
  gameOn = true;
  if (retourconfirm == true) {
    //domSpanStart.removeEventListener("click" , start1)
    functiontimer.start();
    //document.getElementById("boxblack").style.backgroundImage = "url('../assets/img/CASSTE.jpg')";
    theClickme.style.animationDuration = initvar.speed.val + "s" // active rotation
    theClickme.addEventListener("mouseover", x)
    theClickme.addEventListener("click", Bonclic, { capture: false });
    theClickboxblack.addEventListener("click", functionclickrate, { capture: false });
    initvar.pointToNextLevel.DOM.innerHTML = initvar.pointToNextLevel.val;
  }


}

function x() {
  setTimeout(function () {
    theClickme.style.top = Math.trunc(Math.random() * 450) + "px";
    theClickme.style.left = Math.trunc(Math.random() * 800) + "px";
  }, 800);
}


function functionclickrate() { //  clic raté fonction
  console.log("Clic raté")
  initvar.compteurblack.val++ //
  initvar.compteurblack.DOM.innerHTML = initvar.compteurblack.val; //
  let audio = document.getElementById("audioPlayer2")
  audio.play()
  console.log('compteur go1')
  initvar.score.val -= 1;
  initvar.score.DOM.innerHTML = initvar.score.val;
  console.log('compteur go1')
}

function Bonclic(e) {
  console.log("bonclic")
  e.stopPropagation()
  initvar.score.val += 10; // 
  initvar.score.DOM.innerHTML = initvar.score.val; // Imprime dans le DOM la valeur du score
  let audio = document.getElementById("audioPlayer")
  audio.play()
  initvar.pointToNextLevel.val--;
  initvar.pointToNextLevel.DOM.innerHTML = initvar.pointToNextLevel.val;
  console.log("POINTNEXT")
  if (initvar.pointToNextLevel.val <= 0) {
   nextLevel()
  }

}

function nextLevel(){
  if (initvar.level.val === 6) {
    Endgame();
    
  }else{
  initvar.level.val++;
  initvar.level.DOM.innerHTML = initvar.level.val;
  initvar.sec.val += 10;
  initvar.sec.DOM.innerHTML = initvar.sec.val;
  initvar.pointToNextLevel.val = 10;
  initvar.pointToNextLevel.DOM.innerHTML = initvar.pointToNextLevel.val;
  
  }
  
}