//task1

const timerCountdown = document.getElementById('timer-countdown');

let hourCountdown = 3600;

    let seconds = hourCountdown % 60;
    let strSeconds = String(seconds).padStart(2, '0');
    let totalMinutes = Math.floor(hourCountdown / 60);
    let minutes = totalMinutes % 60;
    let strMinutes = String(minutes).padStart(2, '0');
    let hours = Math.floor(totalMinutes / 60) % 24;
    let strHours = String(hours).padStart(2, '0');

timerCountdown.textContent = `${strHours}:${strMinutes}:${strSeconds}`;

    

setInterval(() => {
    hourCountdown -= 60;

    seconds = hourCountdown % 60;
    strSeconds = String(seconds).padStart(2, '0');
    totalMinutes = Math.floor(hourCountdown / 60);
    minutes = totalMinutes % 60;
    strMinutes = String(minutes).padStart(2, '0');
    hours = Math.floor(totalMinutes / 60) % 24;
    strHours = String(hours).padStart(2, '0');

    timerCountdown.textContent = `${strHours}:${strMinutes}:${strSeconds}`;
}, 60000)

setTimeout(() => {
    alert('Залишилося менше половини часу')
}, 1800000)


//task2

const timerCountdownDeath = document.getElementById('timer-countdown-death');

let btn = '';



function deathCounter() {
    timerCountdownDeath.classList.remove('death')
    let time = 30000;
const countDown = setInterval(() => {
    time -= 4;
    const seconds = Math.floor(time / 1000);
    const miliSeconds = time % 1000;
    timerCountdownDeath.textContent = `${seconds}.${miliSeconds}`;

    if(time <= 10000) {
            timerCountdownDeath.classList.add('warning')
    }
    if(time === 0) {
        clearInterval(countDown);
        const yodaSound = document.getElementById('yoda-sound');     
        yodaSound.currentTime = 0;
        yodaSound.volume = 0.2;
        yodaSound.play();
        console.log('Час вийшов!')
        timerCountdownDeath.classList.remove('warning');
        timerCountdownDeath.classList.add('death')
        btn = document.createElement('button')
        btn.classList.add('failed')
        btn.textContent = "Спробувати ще раз."
        document.body.appendChild(btn)
        btn.addEventListener('click', () => {
            btn.remove();
            deathCounter()
        })
    }
}, 4);

}

deathCounter()