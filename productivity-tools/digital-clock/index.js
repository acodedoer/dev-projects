const startClock = () =>{
    const HR = document.querySelector('#hr')
    const MIN = document.querySelector('#min')
    const SEC = document.querySelector('#sec')
    const YEAR = document.querySelector('#year')
    const MONTH = document.querySelector('#month')
    const DATE = document.querySelector('#date')
    const DATE_DATA = new Date();

    DATE.innerHTML = DATE_DATA.getDate()
    MONTH.innerHTML = DATE_DATA.getMonth()
    YEAR.innerHTML = DATE_DATA.getYear()
    SEC.innerHTML = DATE_DATA.getSeconds()
    HR.innerHTML = DATE_DATA.getHours()
    MIN.innerHTML = DATE_DATA.getMinutes()
}

startClock()