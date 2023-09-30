todaysDate = new Date(document.lastModified);
dayName = todaysDate.getDate();
monthName = todaysDate.getMonth() + 1;
year = todaysDate.getFullYear();
time = todaysDate.toLocaleTimeString('it-IT');
document.querySelector('#year').textContent = `${year} Barinas Chamber`;
document.querySelector('#lastModified').textContent = `Last Modification: ${dayName}/${monthName}/${year} ${time}`;


const hamButton = document.querySelector('#displayMenu');
const navigation = document.querySelector('.menu');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


/////////////////////////////////Page two JavaScript///////////////////////////////////////////////////////////////////
const currentDate = document.querySelector(".current-date");
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
const DaysLi = document.querySelector(".days"); 
const buttons = document.querySelectorAll(".icons span"); 

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

function displayCalendar(){
    let firstDayoftMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayoftMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let listItems = '';

    for (let i = firstDayoftMonth; i > 0; i--) {
        listItems += `<li class='inactive'>${lastDateofLastMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ?
                     "active" : "";
        listItems += `<li class='${isToday}'>${i}</li>`
    }

    for (let i = lastDayoftMonth; i < 6; i++) {
        listItems += `<li class='inactive'>${i - lastDayoftMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    DaysLi.innerHTML = listItems;
}

displayCalendar();

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        currMonth = button.id === "prev" ? currMonth - 1 : currMonth + 1
        if (currMonth > 11) {
            currMonth = 0;
            currYear += 1;
        }else if(currMonth < 0){
            currMonth = 11;
            currYear-=1;
        }
        displayCalendar();
    })
})


const displayMessage = document.querySelector('.visit h2');

let numVisits = Number(localStorage.getItem('numVisits')) || 0;

let dateOfVisit = Date.now();



let firstVisit;

if (numVisits === 0){
    displayMessage.textContent = 'Welcome! Let us know if you have any questions.';
    localStorage.setItem('dayLastVisit', Date.now());
} else if(dateOfVisit - Number(localStorage.getItem('dayLastVisit')) >= 86400000){
    let days = Math.ceil((dateOfVisit - (Number(localStorage.getItem('dayLastVisit'))))/86400000);
    displayMessage.textContent = `You last visited ${days} days ago.`;
    localStorage.setItem('dayLastVisit', dateOfVisit);
} else if(dateOfVisit - Number(localStorage.getItem('dayLastVisit')) < 86400000){
    displayMessage.textContent = 'Back so soon! Awesome!';
    localStorage.setItem('dayLastVisit', dateOfVisit)
}

numVisits++
localStorage.setItem('numVisits', numVisits);