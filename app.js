
const fullScreen=document.getElementById("full-screen")
const mainDiv=document.getElementById("main-div")
const container=document.getElementById("container")
const floatBtn=document.getElementById("Float-btn")

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
    floatBtn.style.visibility="visible";
    container.style.visibility="hidden"
    mainDiv.style.backgroundColor="blue";
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
  container.style.visibility="visible"
}