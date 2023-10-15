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

const baseURL = 'https://jesuscontreras26.github.io/wdd230/chamber/';
const linksURL = 'https://jesuscontreras26.github.io/wdd230/chamber/data/members.json';
const ulList = document.querySelector('.grid');

async function fetchLinks(){
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayCards(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCards(data){
    data.directory.forEach(member => {
        let section = document.createElement('section');
        let nameMember = document.createElement('h4');
        let addressMember = document.createElement('p');
        let phoneMember = document.createElement('p');
        let urlMember = document.createElement('a');
        let imgMember = document.createElement('img');
        let membershipMember = document.createElement('p');
        let joinMember = document.createElement('p');

        nameMember.innerHTML = `${member.name}`
        imgMember.setAttribute('src', member.image);
        imgMember.setAttribute('alt', member.name);
        imgMember.setAttribute('loading', 'lazy');
        imgMember.setAttribute('width', '160');
        imgMember.setAttribute('height', '160');
        addressMember.innerHTML = `${member.address}`;
        phoneMember.innerHTML = `${member.phone}`;
        urlMember.innerHTML = `${member.url}`;
        urlMember.setAttribute('href', member.url);
        membershipMember.innerHTML = `Membership: ${member.membership}`;
        joinMember.innerHTML = `Member Since: ${member.join}`;

        section.appendChild(imgMember);
        section.appendChild(nameMember);
        section.appendChild(addressMember);
        section.appendChild(phoneMember);
        section.appendChild(urlMember);
        section.appendChild(membershipMember);
        section.appendChild(joinMember);

        ulList.appendChild(section);
    });
}

fetchLinks();


//buttons functionality
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
