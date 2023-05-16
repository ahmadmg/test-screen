// Set a name for each DOM item 
const fullScreen=document.getElementById("full-screen")
const mainDiv=document.getElementById("main-div")
const container=document.getElementById("container")
const floatBtn=document.getElementById("Float-btn")
 
let colorInterval;

import colors from "./assest.js"
// updating the time on the page
window.addEventListener("load", (event) => {
  updateTime()
});
// add function to start and end the test
fullScreen.addEventListener("click",(e)=>openFullscreen(e))
floatBtn.addEventListener("click",endFullScreen)

// F to start the test 
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
    floatBtn.style.display="block";
    mainDiv.style.backgroundColor = "transparent";
  }

  
function endFullScreen(){
  for( let i=0; i<colors.length; i++){
    clearTimeout("i")
  }
  mainDiv.style.backgroundColor = "transparent";
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
  floatBtn.style.display="none";
  container.style.visibility="visible";
 
}



function changeBackgroundColor() {
  let index = 0;
  colors.map((color, index) => {
    setTimeout(() => {
      mainDiv.style.backgroundColor = color;
    }, index * 2500); // Change color every 1 second (adjust the interval as needed)
  });
}
function updateTime() {
  let now = new Date();
  let date = now.toLocaleDateString();
  let time = now.toLocaleTimeString();

  document.getElementById("datetime").innerHTML =`<h3> ${date}<h3><h3>  ${time}</h3>`
}