let date = new Date(2020, 8, 30, 9, 0, 0)

let convertToCountDownArray = (dateDiffInMs) => {
	
	let minutesInMs = 60 * 1000
	let hoursInMs = minutesInMs * 60
	let daysInMs = hoursInMs * 24
	
	let days = Math.floor(dateDiffInMs / (daysInMs))
	let hours = Math.floor((dateDiffInMs % daysInMs) / hoursInMs)
	let minutes = Math.floor((dateDiffInMs % hoursInMs) / minutesInMs)
	let seconds = Math.floor((dateDiffInMs % minutesInMs) / 1000)
	
	let hoursString = `${hours}`.length == 1 ? `0${hours}` : hours
	let minutesString = `${minutes}`.length == 1 ? `0${minutes}` : minutes
	let secondsString = `${seconds}`.length == 1 ? `0${seconds}` : seconds
	
	let result = [days, hoursString, minutesString, secondsString]
	
	return result
}

let updateClock = () => {
	let diff = moment(date).diff(moment())
	let result = convertToCountDownArray(diff)
	
	$("div.clock .days").html(result[0])
	$("div.clock .hours").html(result[1])
	$("div.clock .minutes").html(result[2])
	$("div.clock .seconds").html(result[3])
}

$(() => {
	updateClock()
	
	setInterval(() => {
		updateClock()	
	}, 1000)
});
