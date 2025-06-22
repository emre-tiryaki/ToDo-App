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
    ToDo.forEach(value => {
        new_chore = document.createElement('div');
        new_chore.classList.add('chore');
        new_chore.innerHTML = `<h3 id="chore-header">${value.header}</h3>
                        <button id="delete-button">Delete</button>
                        <button id="finish-button">Finish</button>
                        <p id="chore-description">${value.description}</p>`;

        ToDoContainer.append(new_chore);
    });

    Finished.forEach(value => {
        new_chore = document.createElement('div');
        new_chore.classList.add('chore');
        new_chore.innerHTML = `<h3 id="chore-header">${value.header}</h3>
                        <button id="delete-button">Delete</button>
                        <button id="finish-button">Finish</button>
                        <p id="chore-description">${value.description}</p>`;

        ToDoContainer.append(new_chore);
    });

    console.log("Data writed");
}

// if there is a chore write it
if(ToDo.length !== 0 || Finished.length !== 0)
    writeData()

// add chore buttons event handler
add_btn.addEventListener('click', () => {
    chore = {
        header : header_input.value,
        description : chore_input.value
    };

    ToDo.push(chore);

    new_chore = document.createElement('div');
    new_chore.classList.add('chore');
    new_chore.innerHTML = `<h3 id="chore-header">${chore.header}</h3>
                    <button id="delete-button">Delete</button>
                    <button id="finish-button">Finish</button>
                    <p id="chore-description">${chore.description}</p>`;

    ToDoContainer.append(new_chore);

    updateLocalStorage();

    console.log("chore added");
});