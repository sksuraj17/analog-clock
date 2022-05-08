setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12

    setRotation(secHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)    
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()