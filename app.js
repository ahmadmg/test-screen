
const fullScreen=document.getElementById("full-screen")
const mainDiv=document.getElementById("main-div")

fullScreen.addEventListener("click",openFullscreen)
function openFullscreen() {
    if (mainDiv.requestFullscreen) {
        mainDiv.requestFullscreen();
    } else if (mainDiv.webkitRequestFullscreen) { /* Safari */
    mainDiv.webkitRequestFullscreen();
    } else if (mainDiv.msRequestFullscreen) { /* IE11 */
    mainDiv.msRequestFullscreen();
    }
  }