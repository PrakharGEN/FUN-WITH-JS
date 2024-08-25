const secondHand = document.querySelector('.hand-sec')
const minuteHand = document.querySelector('.hand-min')
const hourHand = document.querySelector('.hand-hour')

const updateClock = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secDegree = seconds * 6 + 90
  const minDegree = minutes * 6 + 90
  const hourDegree = hours * 30 + 90

  secondHand.style.transform = `rotate(${secDegree}deg)`
  minuteHand.style.transform = `rotate(${minDegree}deg)`
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(() => {
  updateClock()
}, 1000)

updateClock()
