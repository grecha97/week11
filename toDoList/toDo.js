const taskForm = document.getElementById ('taskForm');
const okButton = document.getElementById ('button');
const taskList = document.getElementById ('taskList');
const list = document.querySelector('ul');

function createTask () {
    const newElem = document.createElement('li');
    const taskText = taskForm.value;
    newElem.textContent = taskText;
    taskList.append(newElem);
    taskForm.value = '';
}
okButton.addEventListener('click', createTask);

function checkTask (evt) {
        if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('completed');
        }
}
list.addEventListener('click', checkTask);