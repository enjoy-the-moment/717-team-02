(function() {

    const days = document.querySelector('.countdown__days');
    const hours = document.querySelector('.countdown__hours');
    const minuets = document.querySelector('.countdown__minutes');
    const seconds = document.querySelector('.countdown__seconds');
    
function countDown () {
    //определение даты начала акции
    const deadlineDate = new Date('December 01 2022 00:00:00');
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

    //вставка значений в объекты дни, часы, минуты, секунды  и оператор добавления "0"

    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minuets.innerText = minuetsLeft < 10 ? '0' + minuetsLeft : minuetsLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

//принудительный запуск функции при обновлении стр, чтобы избавиться от прописанных значений
countDown();
//вызов функции каждую секунду
setInterval(countDown, 1000);

})();