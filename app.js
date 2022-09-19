const inputTag = document.getElementById("input");
const ul = document.getElementById("list");
const addButton = document.getElementById("addButton");   
const showHideButton = document.getElementById("showHide");
addButton.onclick = addTask;
showHideButton.onclick = showHide;






function addTask() {
    if ( inputTag.value != "") {
        let inputValue = inputTag.value;
        const li = document.createElement("li");
        const removeButton = document.createElement("button");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        li.innerHTML = inputValue;
        removeButton.innerHTML = "Remove";
        li.appendChild(checkBox);
        li.appendChild(removeButton);
        ul.appendChild(li);
        removeButton.onclick = removeTask;
        inputTag.value = "";
    }    
}

function removeTask() {
    this.parentNode.remove();
}

function showHide() {
    if ( ul.style.display == "none") {
        ul.style.display = "block";
        showHideButton.innerHTML = "Hide List";
    } else {
        ul.style.display = "none";
        showHideButton.innerHTML = "Show List";
    }  
}



