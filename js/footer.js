(function () {
  const fclockContainer = document.querySelector(".footer__clock");
  fclockContainer.innerText = new Date().toLocaleTimeString();
  function fupdateTime() {
    fclockContainer.innerText = new Date().toLocaleTimeString();
  }

  setInterval(fupdateTime, 1000);
})();
