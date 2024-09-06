const hourArrow = document.querySelector('.h'),
    minuteArrow = document.querySelector('.m'),
    secondArrow = document.querySelector('.s'),
    hoursBox = document.querySelector('.hours'),
    minutesBox = document.querySelector('.minutes');

function watch() {

    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)`

    hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => watch(), 1000)

}
watch()


// рекурсия - это когда функция запускает саму себя внутри
// setTimeout() - это функция которая запускает что то с указанной задержкой

// let i = 0;

// function qwerty() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() =>  qwerty(), 1000)

//     }
// }
// qwerty()


const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el, i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

const btn = document.querySelector('.stopwatch__btn')
const span = document.querySelector('.tabsLink__span')

const seconds = document.querySelector('.stopwatch__seconds');
const minutes = document.querySelector('.stopwatch__minutes');
const hours = document.querySelector('.stopwatch__hours');

let secondNum = 0
let minuteNum = 0
let hourNum = 0


btn.addEventListener('click', () => {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        stopWatch()
    }
    else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')

    }
    else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        secondNum = 0
        seconds.innerHTML = secondNum
        minuteNum = 0
        minutes.innerHTML = minuteNum
        hourNum = 0
        hours.innerHTML = hourNum
    }
})


function stopWatch() {
    if (btn.innerHTML == 'stop') {
        if (secondNum == 59) {
            secondNum = 0
            seconds.innerHTML = secondNum
            if (minuteNum == 59) {
                minuteNum = 0
                minutes.innerHTML = minuteNum
                if (hourNum == 59) {
                    hourNum = 0
                    hours.innerHTML = hourNum
                } else {
                    hourNum++
                    hours.innerHTML = hourNum
                }
            }
            else {
                minuteNum++
                minutes.innerHTML = minuteNum
            }
        }
        else {
            secondNum++
            seconds.innerHTML = secondNum
        }
        setTimeout(() => {
            stopWatch()
        }, 1000);
    }
}



