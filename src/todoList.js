

//takes input from input bar and makes it into a li element in the selected element

const input = document.querySelector("#todoSearch")
let submit = document.querySelector("#submit");
let todoList = document.querySelector("#todoItems")



submit.addEventListener("click", function (e) {
     if(input){
       const newli = document.createElement("li");
       newli.textContent = input.value;
       todoList.appendChild(newli)

    }
})

