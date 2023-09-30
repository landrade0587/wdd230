const input = document.querySelector('#favchap');
const button  = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
button.addEventListener('click', ()=>{
    if(input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();


    }else{
        let message = document.createElement('p');
        message.innerHTML = 'Introduce a book!'
        document.querySelector('body').appendChild(message);
        setTimeout(()=>{
            document.querySelector('body').removeChild(message);
        }, 3000);
    }
});

function displayList(item){
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    li.innerHTML = item;
    delButton.textContent ="❌";
    li.appendChild(delButton);
    list.appendChild(li);
    delButton.addEventListener('click', ()=>{
        list.removeChild(li);
        deleteChapter(li.textContent)
    });
}

function setChapterList(){
    localStorage.setItem("MyFavBList", JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('MyFavBList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
