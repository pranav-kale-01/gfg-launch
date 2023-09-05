var starCount = 0;
function addStars() {
  var starLoop = setInterval(function () {
    var starChoice = Math.random();
    var x = Math.floor(window.innerWidth * Math.random());
    if (starChoice <= 0.5) {
      stars.outerHTML += `<div id="star${starCount}" class="star-wrapper"><svg class="star star1" viewBox="0 0 54 54"><g><g><rect y="18" width="54" height="18" fill="#fff"/><rect x="18" width="18" height="54" fill="#fff"/></g></g></svg></div>`;
    } else {
      stars.outerHTML += `<div id="star${starCount}" class="star-wrapper"><svg class="star star2" viewBox="0 0 18 18"><g id="Layer_2" data-name="Layer 2"><g id="Content"><rect width="18" height="18" fill="#fff"/></g></g></svg></div>`;
    }
    var currStar = document.getElementById(`star${starCount}`);
    currStar.style.left = x + "px";
    starCount++;
    if (starCount > 200) {
      clearInterval(starLoop);
    }
  }, 200);
}

function launchButton() {
  var element0 = document.getElementById("launch-btn");
  element0.classList.add("hide-launch-btn");

  var element1 = document.getElementById("planet");
  element1.classList.add("planet-animation");

  var element2 = document.getElementById("sky");
  element2.classList.add("sky-animation");

  var element3 = document.getElementById("thruster");
  element3.classList.add("thruster-animation");

  var element4 = document.getElementById("rocket-takeoff-wrapper");
  element4.classList.add("rocket-takeoff-wrapper-animation");

  var element5 = document.getElementById("ultra-big");
  // var element6 = document.getElementById("video-play-button");

  element2.addEventListener("animationend", function () {
    // showing the text that rocket is launched
    element5.classList.add("disp-visible");
    // element6.classList.add("disp-visible");
  });

  var audio = new Audio("mixkit-sci-fi-rocket-engine-1723.wav");

  var element7 = document.getElementById("videoplayer");

  audio.addEventListener("ended", () => {
    element7.classList.add("disp-visible");
  });

  element7.addEventListener("playing", (event) => {
    const player = document.getElementById("videoplayer");
    if (player.requestFullscreen) player.requestFullscreen();
    else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
    else if (player.msRequestFullScreen) player.msRequestFullScreen();
  });

  audio.play();

  var stars = document.getElementById("stars");
  stars.outerHTML = '<div id="stars"></div>';
  addStars();
}

function delayPlay() {
  launchButton();
  const player = document.getElementById("videoplayer");
  if (player.requestFullscreen) player.requestFullscreen();
  else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
  else if (player.msRequestFullScreen) player.msRequestFullScreen();
  setTimeout(function () {
    player.play();
  }, 8000);
}
