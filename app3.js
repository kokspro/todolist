var toDoList = {
    inputTag: document.getElementById("input"),
    ul: document.getElementById("list"),
    addButton: document.getElementById("addButton"),   
    showHideButton: document.getElementById("showHide")
}

toDoList.addButton.onclick = addTask;
toDoList.showHideButton.onclick = showHide;

function addTask() {
    if ( toDoList.inputTag.value != "") {
        let inputValue = toDoList.inputTag.value;
        const li = document.createElement("li");
        const removeButton = document.createElement("button");

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");




        li.innerHTML = inputValue;
        removeButton.innerHTML = "Remove";
        li.appendChild(checkBox);
        li.appendChild(removeButton);
        toDoList.ul.appendChild(li);
        removeButton.onclick = removeTask;
        toDoList.inputTag.value = "";
    }    
}

function removeTask() {
    this.parentNode.remove();
}

function showHide() {
    if ( toDoList.ul.style.display == "none") {
        toDoList.ul.style.display = "block";
        toDoList.showHideButton.innerHTML = "Hide List";
    } else {
        toDoList.ul.style.display = "none";
        toDoList.showHideButton.innerHTML = "Show List";
    }  
}
