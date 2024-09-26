const input = document.querySelector('#favchap');
const button  = document.querySelector('button');
const list = document.querySelector('ul')



button.addEventListener('click', function(){
    if(input.value.trim() != ''){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        list.append(li, deleteButton);
        input.value ='';
    }

});

deleteButton.addEventListener('click', function(){
    list.removeChild(li, deleteButton);
    input.value = '';
    input.focus();
});