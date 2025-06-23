// the buttons and stuff
const add_btn = document.getElementById('add-button');
const header_input = document.getElementById('header');
const chore_input = document.getElementById('chore-input');
const ToDoContainer = document.getElementById('To-Do');
const FinishedContainer = document.getElementById('Finished');

// the chores lists
const ToDoData = localStorage.getItem('ToDo');
const ToDo = ToDoData ? JSON.parse(ToDoData) : [];

const FinishedData = localStorage.getItem('Finished');
const Finished = FinishedData ? JSON.parse(FinishedData) : [];

async function updateLocalStorage(){
    localStorage.setItem('ToDo', JSON.stringify(ToDo));
    localStorage.setItem('Finished', JSON.stringify(Finished));
}

// write the saved data
function writeData(){
    ToDo.forEach(value => addToDo(value));
    Finished.forEach(value => addFinished(value));
    console.log("Data writed");
}

// adding data to the ToDo div
function addToDo(value){
    new_chore = document.createElement('div');
    new_chore.classList.add('chore');

    header = document.createElement('h3');
    header.id = 'chore-header';
    header.textContent = value.header;

    finish_button = document.createElement('button');
    finish_button.id = 'finish-button';
    finish_button.textContent = "Finish";
    finish_button.addEventListener('click', () => {
            ToDo.splice(ToDo.indexOf(value), 1);
            Finished.push(value);
            updateLocalStorage();
            finish_button.parentNode.remove();
            addFinished(value);
    });

    delete_button = document.createElement('button');
    delete_button.id = 'delete-button';
    delete_button.textContent = "Delete";
    delete_button.addEventListener('click', () => {
            delete_button.parentNode.remove();
            ToDo.splice(ToDo.indexOf(value), 1);
            updateLocalStorage();
    });

    description = document.createElement('p');
    description.id = 'chore-description';
    description.textContent = value.description;

    new_chore.append(header);
    new_chore.append(finish_button);
    new_chore.append(delete_button);
    new_chore.append(description);

    ToDoContainer.append(new_chore);
}

// add Data to the Finished div
function addFinished(value){
    new_chore = document.createElement('div');
    new_chore.classList.add('chore');

    header = document.createElement('h3');
    header.id = 'chore-header';
    header.textContent = value.header;

    delete_button = document.createElement('button');
    delete_button.id = 'delete-button';
    delete_button.textContent = "Delete";
    delete_button.addEventListener('click', () => {
            delete_button.parentNode.remove();
            Finished.splice(Finished.indexOf(value), 1);
            updateLocalStorage();
    });

    description = document.createElement('p');
    description.id = 'chore-description';
    description.textContent = value.description;

    new_chore.append(header);
    new_chore.append(delete_button);
    new_chore.append(description);

    FinishedContainer.append(new_chore);
}

// if there is a chore write it
if(ToDo.length !== 0 || Finished.length !== 0)
    writeData();

// add chore buttons event handler
add_btn.addEventListener('click', () => {
    chore = {
        header : header_input.value,
        description : chore_input.value
    };

    ToDo.push(chore);

    addToDo(chore);

    updateLocalStorage();

    console.log("chore added");
});