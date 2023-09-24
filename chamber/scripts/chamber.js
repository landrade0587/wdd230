let DateModified = new Date(document.lastModified);
let dayName = DateModified.getDate();
let monthName = DateModified.getMonth() + 1;
let year = DateModified.getFullYear();
let time = DateModified.toLocaleTimeString('it-IT');
document.querySelector('#year').textContent = `${year} Barranquilla Chamber`;
document.querySelector('#lastModified').textContent = `Last Modification: ${dayName}/${monthName}/${year} ${time}`;


const hamButton = document.querySelector('#displayMenu');
const navigation = document.querySelector('.menu');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/**********************SpotLights************************/

const baseURL = 'https://landrade0587.github.io/wdd230/chamber/';
const linksURL = 'https://landrade0587.github.io/wdd230/chamber/data/members.json';
let spotlights = [];
let spotlightTitles = document.querySelectorAll('.spotlightTitles');

async function fetchDirectory(){
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
			saveData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchDirectory();

function saveData(members){
	let i = 0;
	let directory = members.directory;
	while (i != 3) {
		let randomNumber = Math.floor(Math.random() * directory.length);
		if (directory[randomNumber].membership === "Golden" || directory[randomNumber].membership === "Silver") {
			spotlights[i] = `<h4>${directory[randomNumber].description}</h4>
							 <a href="">${directory[randomNumber].email}</a>
							 <a href="">${directory[randomNumber].phone}</a>
							 <a href="">${directory[randomNumber].url}</a>`;
			spotlightTitles[i].textContent = directory[randomNumber].name
			directory.splice(randomNumber, 1);
			i++;
		} 
	}
}


let control = true;

spotlightTitles[0].addEventListener('click', ()=>{
	if(control === true){
		document.querySelector('#spotlightThree').classList.remove('spotlightP')
		document.querySelector('#spotlightThree').textContent = '';
		document.querySelector('#spotlightTwo').classList.remove('spotlightP')
		document.querySelector('#spotlightTwo').textContent = '';
		document.querySelector('#spotlightOne').classList.toggle('spotlightP');
		document.querySelector('#spotlightOne').innerHTML = spotlights[0];
		control = false;
	}else{
		document.querySelector('#spotlightOne').classList.remove('spotlightP')
		document.querySelector('#spotlightOne').textContent = '';
		control = true;
	}

})

spotlightTitles[1].addEventListener('click', ()=>{
	if(control === true){
		document.querySelector('#spotlightOne').classList.remove('spotlightP')
		document.querySelector('#spotlightOne').textContent = '';
		document.querySelector('#spotlightThree').classList.remove('spotlightP')
		document.querySelector('#spotlightThree').innerHTML = ''
		document.querySelector('#spotlightTwo').classList.toggle('spotlightP');
		document.querySelector('#spotlightTwo').innerHTML = spotlights[1];
		control = false;
	}else{
		document.querySelector('#spotlightTwo').classList.remove('spotlightP')
		document.querySelector('#spotlightTwo').textContent = '';
		control = true;
	}

})

spotlightTitles[2].addEventListener('click', ()=>{
	if(control === true){
		document.querySelector('#spotlightOne').classList.remove('spotlightP')
		document.querySelector('#spotlightOne').textContent = '';
		document.querySelector('#spotlightTwo').classList.remove('spotlightP')
		document.querySelector('#spotlightTwo').textContent = '';
		document.querySelector('#spotlightThree').classList.toggle('spotlightP');
		document.querySelector('#spotlightThree').innerHTML = spotlights[2];
		control = false;
	}else{
		document.querySelector('#spotlightThree').classList.remove('spotlightP')
		document.querySelector('#spotlightThree').textContent = '';
		control = true;
	}

})


/***********************WeatherToday*********************/

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon-today');
const captionDesc = document.querySelector('#todayCaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=30368f78cca2b27d0603441e7cc15f73';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const imgSrc = ` https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', imgSrc);
    weatherIcon.setAttribute('alt', 'weatherIcon');
    captionDesc.textContent = desc;
}

apiFetch();

/************************ForecastWeather********************/
const forecastTemp = document.querySelector('#forecast-temp');
const forecastIcon = document.querySelector('#weather-icon-forecast');
const forecastCaption = document.querySelector('#forecastCaption');

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=imperial&appid=30368f78cca2b27d0603441e7cc15f73';

async function apiFetchForecast(){
	try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
			displayResultsFore(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResultsFore(data){
    forecastTemp.innerHTML = `${data.list[16].main.temp}&deg;F`
    const imgSrc = ` https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`
    let desc = data.list[16].weather[0].description;

    forecastIcon.setAttribute('src', imgSrc);
    forecastIcon.setAttribute('alt', 'weatherIcon');
    forecastCaption.textContent = desc;
}


apiFetchForecast();

/***************************Banner*****************************/
const banner = document.querySelector(".banner");
const bannerButton = document.querySelector(".banner-button");
const todayDate = new Date();
const todayDay = todayDate.getDay();


function bannerDisplay(){
	if (todayDay === 1 | todayDay === 2 | todayDay === 3){
		banner.style.display = "block";
		bannerButton.addEventListener('click', ()=>{
			banner.style.display = "none";
		});
	}
}

bannerDisplay()