let todoInput = document.querySelector(".todo-input");
// console.log(todoInput);
let addTodoButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todos-list");



// let todo = todoInput.value;

addTodoButton.addEventListener("click" , function(){
    addTodo();
})

addTodoButton.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        addTodo(); 
    }
})

function addTodo(){
    let todo = todoInput.value;
    if(todo){
      
        let listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";

        listItem.append(pTag);
        listItem.append(deleteButton);

        // console.log(listItem);
        todoList.append(listItem);

        deleteButton.addEventListener("click",function(e){
            e.target.parentNode.remove();
        })

        todoInput.value = "";
    }
}