const objectLease = ['Ячейка 1', 'Ячейка2', 'Ячейка3']

let newDate = new Date()
let currentYear = newDate.getFullYear()
let currentMonth = newDate.getMonth()

const getDayName = (year, month, day) => {
    let date = new Date(year, month, day)
    let options = {weekday: 'short'}
    return new Intl.DateTimeFormat("ru-RU", options).format(date)

}

const getFullDateName = (year, month, day) => {
    let date = new Date(year, month, day)
    let options = {year: 'numeric', month: 'short', day: 'numeric'}
    return new Intl.DateTimeFormat("ru-RU", options).format(date)

}

const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month+1, 0)
    return date.getDate()
}

function renderCalendar(LastDay) {
    let periodPTag = document.getElementById('selected-period')
    periodPTag.innerText = getFullDateName(currentYear, currentMonth, 1) + ' - ' +
        getFullDateName(currentYear, currentMonth, LastDay)

    let table = document.querySelector("#thiz-table")
    table.innerHTML = ''

    tr = document.createElement('tr')

    td = document.createElement('td')
    td.innerHTML = 'Object/Date'

    tr.appendChild(td)

    for (let day = 1; day <= LastDay; day++){
        dayName = getDayName(currentYear, currentMonth, day)

        td = document.createElement('td')
        td.insertAdjacentHTML('beforeend', `<div class="day-name">${dayName}</div>
        <div calss='day'>${day}</div>`)
        tr.appendChild(td)
    }
    table.appendChild(tr)

    objectLease.forEach(object => {
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerHTML = object
        tr.appendChild(td)

        for (let day = 1; day <= LastDay; day++){
            td = document.createElement('td')
            td.innerHTML = ''
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })

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