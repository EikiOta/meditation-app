const container = document.querySelector(".container");
const text = document.getElementById("text");


let totalTime = 7500; // 7.5s
let breatheTime = (totalTime / 5) * 2; // 3s
let holdTime = totalTime / 5; // 1.5s
let a = 0;
const stopButton = document.getElementById("stop");
stopButton.disabled = true;

/*音楽切り替えボタンはデフォルト無効*/
let changeBtn = document.getElementById("changeBgm");
changeBtn.disabled = true;

function breatheAnimation() {
  text.innerHTML = "吸ってください";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "止めてください";

    setTimeout(() => {
      text.innerHTML = "吐いてください";
      container.className = "container shrink";
    }, holdTime); // 3s + 1.5s= 4.5sたったら始まる
  }, breatheTime); //3sたったら始まる
  const button = document.getElementById("start");
  button.disabled = true;
  stopButton.disabled = false;
  setInterval(breatheAnimation, totalTime);
}

let timerVariable = 0;
let totalSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  let seconds = totalSeconds - (hour * 3600 + minute * 60);
  document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;
}



let btn = document.getElementById("start"); //document.getElementByIdを使ってHTMLのbtnというIDを取得
btn.addEventListener('click', function () {   //もしbtn(開始)をクリックしたら
  audio.src = './bgm/瞑想1.mp3';
  audio.play(); //audioを再生
  changeBtn.disabled = false;
  movePointer.style.animation = 'rotate 7500ms linear forwards infinite';
/*タイマー*/
   timerVariable = setInterval(countUpTimer, 1000);
   totalSeconds = 0;
  
});

let btn2 = document.getElementById("changeBGM");




changeBtn.addEventListener('click', function () {   
  audio.pause(); //audioを止める
  audio.currentTime = 0; //時間を０に
  audio.src = './bgm/瞑想2.mp3';
  audio.play(); //audioを再生
  changeBtn.disabled = true;
});





