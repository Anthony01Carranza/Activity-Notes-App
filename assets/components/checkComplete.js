const checkComplete = () => {
    const i = document.createElement("i");
    //para poder crear caracteres de clase tienes que ponerlas separadas para que no de error 
    //Opcion 1
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);

    return i ;
}

const completeTask =(event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle('far');
}

export default checkComplete;