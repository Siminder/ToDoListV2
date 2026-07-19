function createTodoItem(title, description, dueDate, priority ){
    return{
        title,
        description,
        dueDate,
        priority
    }
}


let nav = document.querySelector("#navBar")
let todoDiv = document.querySelector(".todolist");
let form = document.querySelector(".form");
let button = document.querySelector("#addList")


function openForm(){
    button.addEventListener("click", () =>{
        
        nav.style.display = "none";
        todoDiv.style.display = "none";
        form.style.display = "grid"
    })
}

function todoItem(){
    const submit = document.getElementById("submitButton")

    submit.addEventListener("click", (event)=>{
        event.preventDefault();
        

        form.style.display = "none"
        nav.style.display = "flex";
        todoDiv.style.display = "flex";

       createTodoLi()
    }
)}

function createTodoLi(){
    const ul = document.querySelector(".UlforList")
    const createLi = document.createElement("li")

        createLi.classList.add("ulClass")
        createLi.innerHTML = `
                <button type="button" class="todo-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" >
                            <circle cx="12" cy="12" r="10" class="todo-circle"></circle>  
                        </svg>
                </button>
                <h1 class="taskName">task name</h1>
            
            <p class="dueDate">due date</p>
            <button type="button" class="deleteButton" style="background-color: transparent; border: none;">
                <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
        
        `
        deleteLi(createLi);
        ul.append(createLi);
        
        
};

function deleteLi(createLi) {
      const deleteButton = createLi.querySelector(".deleteButton");

        deleteButton.addEventListener("click", (event) => {
            console.log(createLi);
            createLi.style.display = "none"
           
        });
   
}

openForm();
todoItem();
