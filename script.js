class Clock{
	constructor(dateElement, timeElement){
		this.dateElement = dateElement
		this.timeElement = timeElement
	}
	start(){
		this.setDate()
		this.setTime()
	}
	setDate(){
		let today = new Date()
		this.dateElement.innerText = today.getFullYear() + '.' + this.prependZero(today.getMonth() + 1) + '.' + this.prependZero(today.getDate()) + '.' + this.handleDay(today)
	}
	setTime(){
		window.setInterval( () => {
			let now = new Date()
			this.timeElement.innerText = this.prependZero(now.getHours()) + ':' + this.prependZero(now.getMinutes()) + ':' + this.prependZero(now.getSeconds())
		}, 100);
	}
	handleDay(date){
		let week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
		let dayIndex = date.getDay()
		return week[dayIndex]
	}
	prependZero(str){
		let n = Number(str)
		if( n >= 0 && n < 10 ){
			return '0' + n
		}else{
			return str
		}
	}
}
function ready(){
	let currentDateElement = document.getElementById('current-date')
	let currentTimeElement = document.getElementById('current-time')
	let clock = new Clock(currentDateElement, currentTimeElement)
	clock.start()
}
if( document.readyState == "loading" ){
	document.addEventListener("DOMContentLoaded", ready)
}else{
	ready()
}
