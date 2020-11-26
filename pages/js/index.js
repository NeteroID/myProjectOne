const objectLease = ['Ячейка 1', 'Ячейка2', 'Ячейка3']

let newDate = new Date()
let currentYear = newDate.getFullYear()
let currentMonth = newDate.getMonth()

const getDayName = (year, month, day) => {
    const date = new Date(year, month, day)
    const options = {weekday: 'short'}
    return new Intl.DateTimeFormat("ru-RU", options).format(date)

}

const getFullDateName = (year, month, day) => {
    const date = new Date(year, month, day)
    const options = {year: 'numeric', month: 'short', day: 'numeric'}
    return new Intl.DateTimeFormat("ru-RU", options).format(date)

}

const getLastDayOfMonth = (year, month) => {
    const date = new Date(year, month+1, 0)
    return date.getDate()
}

function renderCalendar(LastDay) {
    const periodPTag = document.getElementById('selected-period')
    periodPTag.innerText = getFullDateName(currentYear, currentMonth, 1) + ' - ' +
        getFullDateName(currentYear, currentMonth, LastDay)

    const table = document.querySelector("#thiz-table")
    table.innerHTML = ''
    tr = document.createElement('tr')

    for (let day = 1; day <= LastDay; day++){
        dayName = getDayName(currentYear, currentMonth, day)

        td = document.createElement('td')
        td.insertAdjacentHTML('beforeend', `<div class="day-name">${dayName}</div>
        <div calss='day'>${day}</div>`)
        tr.appendChild(td)
    }
    table.appendChild(tr)

}

function changeMonth(direc) {
    if (direc === 'down') {
        if (currentMonth !== 0) {
            currentMonth--
        } else {
            currentMonth = 11
            currentYear--
        }


    } else {
        if (currentMonth !== 11) {
            currentMonth++
        } else {
            currentMonth = 0
            currentYear++
        }

    }
    renderCalendar(getLastDayOfMonth(currentYear, currentMonth))
}

renderCalendar(getLastDayOfMonth(currentYear, currentMonth))