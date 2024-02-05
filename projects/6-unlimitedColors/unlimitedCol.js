const start = document.querySelector('#startBtn')
const stopx = document.querySelector('#stopBtn')

// to get random color we need ramdom hexdecimal code

const randomColor = () => {
    const hexdecimal = "0123456789ABCDEF"// sample of hexadecimal
    let color = '#'
    var random_number = Math.floor(Math.random() * 16); // this will genrate a number from 0-15
    for (let index = 0; index < 6; index++) {
        color = color + hexdecimal[random_number]
    }
    // this for loop will run 6times ... for example if random number is 10 then it will take A and a will get accumulate in color
    // it will run for 6 time so #123ABC like this we can get the color
    return color
}
let intervalId

function handelStartBackgroundColorChange() {
    if (intervalId == null) {
        intervalId = setInterval(function () {
            document.querySelector('body').style.backgroundColor = randomColor()
        }, 1000)
    }
}
function handelStopBackgroundColorChange() {
    clearInterval(intervalId)
    intervalId = null;
}



start.addEventListener('click', () => {
    handelStartBackgroundColorChange()
})

stopx.addEventListener('click', () => {
    handelStopBackgroundColorChange()
})
