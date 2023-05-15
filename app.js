
const fullScreen=document.getElementById("full-screen")
const mainDiv=document.getElementById("main-div")
const container=document.getElementById("container")
const floatBtn=document.getElementById("Float-btn")
import colors from "./assest.js"

fullScreen.addEventListener("click",(e)=>openFullscreen(e))

floatBtn.addEventListener("click",endFullScreen)

function openFullscreen() {
    if (mainDiv.requestFullscreen) {
        mainDiv.requestFullscreen();
       } else if (mainDiv.webkitRequestFullscreen) { /* Safari */
       mainDiv.webkitRequestFullscreen();
      } else if (mainDiv.msRequestFullscreen) { /* IE11 */
        mainDiv.msRequestFullscreen();
    }
   
    container.style.visibility="hidden"
    
    changeBackgroundColor();
    floatBtn.style.visibility="visible";
    mainDiv.style.backgroundColor = "#f0f0f0";
  }

function endFullScreen(){
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
  floatBtn.style.visibility="hidden";
  container.style.visibility="visible";
  mainDiv.style.backgroundColor = "";
}



function changeBackgroundColor() {
  let index = 0;
  colors.map((color, index) => {
    setTimeout(() => {
      mainDiv.style.backgroundColor = color;
    }, index * 2500); // Change color every 1 second (adjust the interval as needed)
  });
}