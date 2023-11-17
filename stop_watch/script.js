let timerDisplay = document.querySelector('.timerDisplay');
timerDisplay.style.cssText = 'font-size:300px; margin-bottom: 30px ; font-weight: 700;'

let timediv = document.querySelector('.centerelement');
timediv.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;';

let stopBtn = document.getElementById('stopBtn');
stopBtn.style.cssText = 'background-color: red ;color: white ; font-weight: 700;font-size:30px; padding: 20px 20px;border: none;border-radius: 5px;cursor: pointer;'

let startBtn = document.getElementById('startBtn');
startBtn.style.cssText = 'background-color: green ;color: white ; font-weight: 700;font-size:30px; padding: 20px 20px;margin:0px 20px;border: none;border-radius: 5px;cursor: pointer;'

let resetBtn = document.getElementById('resetBtn');
resetBtn.style.cssText = 'background-color: blue ;color: white ; font-weight: 700; font-size:30px;padding: 20px 20px;border: none;border-radius: 5px;cursor: pointer;'

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function () {

    if (timerId != null) { // 
        clearInterval(timerId)
        console.log(timerId, "statbtn_clear");
        //if the timer is running then also we click start then it will stop  setinterval id... 
        // if we dont do this multple interval will run simultaniously and it will affect the result
    }

    //storing the setinterval in a variable so that we can use that to clear the interval,
    // setinteval retuns a id.
    timerId = setInterval(starttimer, 10);//this will run starttimer function at a interval 10ms 10*100=1000
    console.log(timerId, "statbtn");
})

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    console.log(timerId,"stopbtn");
    // console.log(str);
})

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    msec = secs = mins = 0
    timerDisplay.innerHTML = "00:00:00"
})

function starttimer() {
    // incrementing the milisecond ... on basis of that we will calculate the time
    msec++
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }

    }
    let newmsec = msec < 10 ? `0${msec}` : msec;// using 0 in front, for single digit number
    let newsecs = secs < 10 ? `0${secs}` : secs;
    let newmins = mins < 10 ? `0${mins}` : mins;


    timerDisplay.innerHTML = `${newmins} : ${newsecs} : ${newmsec}`;


}