const leftDiv = document.getElementById("left");
const rightDiv = document.getElementById("right");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.addEventListener("click",()=>{
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled=true;
  stopBtn.disabled=false;
})

stopBtn.addEventListener("click",()=>{
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  leftDiv.textContent = "";
  rightDiv.textContent = "";
  stopBtn.disabled=true;
  startBtn.disabled=false;
})

function handleDown(e){
  leftDiv.textContent=`key ${e.key} is pressed`;
  rightDiv.textContent=`key is released.`
}

function handleUp(e){
  leftDiv.textContent=`key ${e.key} is pressed`;
  rightDiv.textContent=`key is released.`
}



