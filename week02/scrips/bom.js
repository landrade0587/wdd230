const input = document.querySelector('#favchap');
const button  = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', ()=>{
    if(input.value != ''){
        const li = document.createElement('li');
        const delButton = document.createElement('button');
        li.innerHTML = input.value;
        delButton.textContent ="❌";
        li.appendChild(delButton);
        list.appendChild(li);
        delButton.addEventListener('click', ()=>{
            list.removeChild(li);
        });
        input.focus();
        input.value = '';

    }else{
        let message = document.createElement('p');
        message.innerHTML = 'Introduce a book!'
        document.querySelector('body').appendChild(message);
        setTimeout(()=>{
            document.querySelector('body').removeChild(message);
        }, 3000);
    } 
});