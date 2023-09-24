todaysDate = new Date(document.lastModified);
dayName = todaysDate.getDate();
monthName = todaysDate.getMonth() + 1;
year = todaysDate.getFullYear();
time = todaysDate.toLocaleTimeString('it-IT');
document.querySelector('#year').textContent = year;
document.querySelector('#lastModified').textContent = `Last Modification: ${dayName}/${monthName}/${year} ${time}`;

const hamButton = document.querySelector('#displayMenu');
const navigation = document.querySelector('.menu');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const darkMode = document.querySelector('#mode');
const main = document.querySelector('main');
const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.link');

darkMode.addEventListener('click', ()=>{
    if(darkMode.textContent.includes('✅')){
        main.style.background = '#000';
        main.style.color = '#fff';
        cards.forEach(element => {
            element.style.background = '#460101';
            element.firstElementChild.style.background = '#072E74';
            element.firstElementChild.style.color = '#fff';
        });
        links.forEach(element =>{
            element.style.color = '#fff';            
        })
        darkMode.textContent = '❎';
    }else{
        main.style.background = '#fff';
        main.style.color = '#000';
        cards.forEach(element => {
            element.style.background = '#fff';
            element.firstElementChild.style.background = '#460101';
            element.firstElementChild.style.color = '#fff';
        });
        links.forEach(element =>{
            element.style.color = '#0000EE';            
        })
        darkMode.textContent = '✅';
    }
})

const visitsDisplay = document.querySelector('.visits');

let numVisits = Number(localStorage.getItem('numVisits-ls')) || 0;

if(numVisits != 0){
    visitsDisplay.textContent = numVisits;

}else{
    visitsDisplay.textContent = 'This is your first Visit 🥳 🥳 , Great!';
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);

/////////////////////Weather Part/////////////////////////
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=8.62&lon=-70.23&units=imperial&appid=30368f78cca2b27d0603441e7cc15f73';
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', imgSrc);
    weatherIcon.setAttribute('alt', 'weatherIcon');
    caption.textContent = `${desc}`;
 
}

apiFetch();
