/* Falta Web Storage */

const body = document.body;
const principalContainer = document.querySelector('.principal-container');
const changeThemeBtn = document.getElementById('changeTheme-btn');
const userInput = document.getElementById('userInput');
const userButton = document.getElementById('userButton');
const taskContainer = document.getElementById('tasks-container');

let h2yourTasks = document.createElement('h2')
let ul = document.createElement('ul')


changeThemeBtn.addEventListener('click', changeTheme)
userButton.addEventListener('click', createTask)

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
});

function createTask() {
    if (userInput.value != '') {
        let li = document.createElement('li')
        let text = userInput.value;
        li.innerText = text
        li.append(delTaskBtn())
        ul.append(li)
        principalContainer.appendChild(ul)
        
        toastifyTaskCreated()
        userInput.focus()
        userInput.value = ''
    }
}

function changeTheme() {
    body.classList.toggle('darkTheme')
    if (body.classList.contains('darkTheme')) {
        changeThemeBtn.innerHTML = '<i class="bi bi-brightness-high">'
    }
    else {
        changeThemeBtn.innerHTML = '<i class="bi bi-moon-stars"></i>'
    }
}

function delTaskBtn() {
    let button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-x-lg"></i>';
    button.classList.add('delete-task-btn');
    button.addEventListener('click', () => {
        let thisTask = button.parentElement
        ul.removeChild(thisTask)
        toastifyTaskRemoved()
    })
    return button
}

principalContainer.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
});

function toastifyTaskCreated()  {
    Toastify({
        text: "Task created!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #099921, #056c16)",
        },
        onClick: function(){}
        }).showToast();
}

function toastifyTaskRemoved() {
    Toastify({
        text: "Task removed!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #c61414, #9b0707)",
        },
        onClick: function(){}
      }).showToast();
}