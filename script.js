function calculo() {
  var projectValueInput = document.querySelector('input[name="project-value"]').value.toString()
  var workedHoursInput = document.querySelector('input[name="worked-hours"]').value
  var workedDaysInput = document.querySelector('input[name="worked-days"]').value
  var vacationDaysInput = document.querySelector('input[name="vacation-days"]').value
  var valueHourElement = document.querySelector("#result")

  let hourValue

  hourValue = 12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))
  hourValue += 20 * (12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))) / 100

  Math.round(hourValue)
  hourValue = parseFloat(hourValue).toFixed(2)

  if (isNaN(hourValue)) {
    valueHourElement.innerHTML = "R$ 0,00"
  } else {
    valueHourElement.innerHTML = "R$ " + Math.round(hourValue) + ",00"
  }
}