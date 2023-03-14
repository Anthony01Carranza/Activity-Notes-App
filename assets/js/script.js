
import checkComplete from "../components/checkComplete.js";
import deleteIcon from "../components/deleteIcon.js";
 ( () => {
    const btn = document.querySelector('[data-form-btn]');



//funcion
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    // agregamos una clase al elemento
    task.classList.add("card");
    input.value = '';
    //backticks
    //console.log(checkComplete());
    const taskContent = document.createElement('div');
    
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
    
    
    //no se puede conbinar string con codigo html dara un error para eso se tiene que crear un create element con todo el codigo.
    //const content = `
    //<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    
    
    //para poner el contenido como hijo
    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteIcon());

};

//llamando a la funcion
btn.addEventListener("click", createTask);




 })();
