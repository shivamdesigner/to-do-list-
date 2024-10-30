// let inputText = document.getElementById('input-text');
// let blanklist = document.querySelector('.blank-list');
// let error = document.querySelector('.error') 
// function add(){
//     if(inputText.value == ""){
//         error.textContent = " please enter your task"
//     }else{
//         error.textContent = ""
//         let newEle = document.createElement("li");
//         newEle.classList.add('list-group-item', 'mt-2' , 'd-flex', 'align-items-center' , 'justify-content-between', 'bg-light' , 'border','rounded-2')
//         newEle.innerHTML= `${inputText.value}  <span id="delete-btn" class="btn btn-dark text-end"> Delete <span>`;
//         blanklist.appendChild(newEle);
//         inputText.value = ""
//         newEle.querySelector('#delete-btn').addEventListener('click' , function(){
//             newEle.remove();
//         } )
//         localStorage.setItem( 'todo-list' , newEle.value)
//     }
// }
let inputText = document.getElementById('input-text');
    let blanklist = document.querySelector('.blank-list');
    let error = document.querySelector('.error');

    // Load tasks from local storage
    document.addEventListener('DOMContentLoaded', function() {
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(task => {
            addTaskToList(task);
        });
    });

    function add() {
        if (inputText.value == "") {
            error.textContent = "Please enter your task";
        } else {
            error.textContent = "";
            let task = inputText.value;
            addTaskToList(task);

            // Store the task in local storage
            let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            storedTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));

            inputText.value = "";
        }
    }

    function addTaskToList(task) {
        let newEle = document.createElement("li");
        newEle.classList.add('list-group-item', 'mt-2', 'd-flex', 'align-items-center', 'justify-content-between', 'bg-light', 'border', 'rounded-2');
        newEle.innerHTML = `
            ${task}
            <span id="delete-btn" class="btn btn-dark text-end">Delete</span>
        `;
        blanklist.appendChild(newEle);

        newEle.querySelector('#delete-btn').addEventListener('click', function() {
            newEle.remove();
            removeFromLocalStorage(task);
        });
    }

    function removeFromLocalStorage(task) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks = storedTasks.filter(storedTask => storedTask !== task);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }