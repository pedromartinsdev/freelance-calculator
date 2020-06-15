const projectValueInput = parseFloat(document.querySelector("input[name=project-value]").value)
const workedHoursInput = parseFloat(document.querySelector("input[name=worked-hours]").value)
const workedDaysInput = parseFloat(document.querySelector("input[name=worked-days]").value)
const vacationDaysInput = parseFloat(document.querySelector("input[name=vacation-days]").value)

function calculo() {
  let hourValue

/*   hourValue = (workedHoursInput * workedDaysInput)
  console.log(hourValue)
  hourValue = (workedHoursInput * workedDaysInput) * vacationDaysInput
  console.log(hourValue)
  hourValue = 12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))
  console.log(hourValue) */
  hourValue = 12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))
  console.log(hourValue)

  hourValue += 20 * (12 * projectValueInput / (52.1 * (workedHoursInput * workedDaysInput) - ((workedHoursInput * workedDaysInput) * vacationDaysInput))) / 100
  


  console.log(hourValue)

  hourValue = parseFloat(hourValue).toFixed(2)

  console.log(hourValue)
  /* return parseFloat(hourValue).toFixed(0) */
}





/* valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) ) */
