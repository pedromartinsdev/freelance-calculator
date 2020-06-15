const projectValueInput = parseFloat(document.querySelector("input[name=project-value]").value)
const workedHoursInput = parseFloat(document.querySelector("input[name=worked-hours]").value)
const workedDaysInput = parseFloat(document.querySelector("input[name=worked-days]").value)
const vacationDaysInput = parseFloat(document.querySelector("input[name=vacation-days]").value)
const valueHourElement = document.querySelector("#result")


function calculo() {
  let hourValue

  hourValue = 12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))
  hourValue += 20 * (12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))) / 100

  Math.round(hourValue)
  hourValue = parseFloat(hourValue).toFixed(2)

  console.log(hourValue)
  if (hourValue == "NaN") {
    valueHourElement.innerHTML = "R$ 0,00"
  } else {
    valueHourElement.innerHTML = "R$ " + Math.round(hourValue) + ",00"
  }
}



