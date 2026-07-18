


let nav = document.querySelector("#navBar")
let todoDiv = document.querySelector(".todolist");
let form = document.querySelector(".form");
let button = document.querySelector("#addList")


function openForm(){
    button.addEventListener("click", () =>{
        console.log("clicked")
        nav.style.display = "none";
        todoDiv.style.display = "none";
        form.style.display = "grid"
    })
}

openForm()
