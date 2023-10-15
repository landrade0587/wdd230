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


const message =  document.querySelector('#formMessage');
const password = document.querySelector('#pwd');
const confirmPass = document.querySelector('#conPwd');
const rangeValue = document.querySelector('#rangevalue');
const range = document.querySelector('#r');


confirmPass.addEventListener("focusout", ()=>{
    if(password.value !== confirmPass.value){
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.display = "block";
        password.style.backgroundColor = "#d4d4d4"
        password.value = "";
        confirmPass.value= "";
        password.focus();
    }else{
        message.style.display= "none";
        password.style.background = "#fff"
    }
});

range.addEventListener('input', displayRatingValue);

function displayRatingValue(){
    rangeValue.innerHTML = range.value;
}