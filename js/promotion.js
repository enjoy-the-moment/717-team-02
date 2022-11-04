(function () {
  const days = document.querySelector(".countdown__days");
  const hours = document.querySelector(".countdown__hours");
  const minuets = document.querySelector(".countdown__minutes");
  const seconds = document.querySelector(".countdown__seconds");

  function countDown() {
    //определение даты начала акции
    const deadlineDate = new Date("December 01 2022 00:00:00");
    //определение текущего времени
    const currentTime = new Date();
    //определение времени, которое осталдось
    const diff = deadlineDate - currentTime;

    //выделение из значения diff дней, часов, минут и секунд
    //дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    //часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    //минуты
    const minuetsLeft = Math.floor(diff / 1000 / 60) % 60;
    //секунды
    const secondsLeft = Math.floor(diff / 1000) % 60;

    //вставка значений в объекты дни, часы, минуты, секунды  и оператор добавления "0"? чтобы всегда 2 цифры

    days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minuets.innerText = minuetsLeft < 10 ? "0" + minuetsLeft : minuetsLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  }

  //принудительный запуск функции при обновлении стр, чтобы избавиться от прописанных значений
  countDown();
  //вызов функции каждую секунду
  setInterval(countDown, 1000);

  
  function typePromotion() {
    let promotion = document.querySelector('.promotion__title');
  promotion.innerText = " ";
  function addP() {
    promotion.innerText = (' ' === ' ') ? 'P' : ' ';
  } 
  setTimeout(addP, 500);
  function addPR() {
    promotion.innerText = ('P' === 'P') ? 'PR' : ' ';
  } 
  setTimeout(addPR,1000);
  function addPRO() {
    promotion.innerText = ('PR' === 'PR') ? 'PRO' : ' ';
  } 
  setTimeout(addPRO,1500);
  function addPROM() {
    promotion.innerText = ('PRO' === 'PRO') ? 'PROM' : ' ';
  } 
  setTimeout(addPROM,2000);
  function addPROMO() {
    promotion.innerText = ('PROM' === 'PROM') ? 'PROMO' : ' ';
  } 
  setTimeout(addPROMO,2500);
  function addPROMOT() {
    promotion.innerText = ('PROMO' === 'PROMO') ? 'PROMOT' : ' ';
  } 
  setTimeout(addPROMOT,3000);
  function addPROMOTI() {
    promotion.innerText = ('PROMOT' === 'PROMOT') ? 'PROMOTI' : ' ';
  } 
  setTimeout(addPROMOTI,3500);
  function addPROMOTIO() {
    promotion.innerText = ('PROMOTI' === 'PROMOTI') ? 'PROMOTIO' : ' ';
  } 
  setTimeout(addPROMOTIO,4000);
  function addPROMOTION() {
    promotion.innerText = ('PROMOTIO' === 'PROMOTIO') ? 'PROMOTION' : ' ';
  } 
  setTimeout(addPROMOTION,4500);
}
setInterval(typePromotion, 5500);

})();
