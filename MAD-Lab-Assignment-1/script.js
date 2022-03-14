const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
count = 0;

function newTodo() {
    /*Add Logic for creating a new Todo Item. */
    var add = window.prompt("Add ne item");
    var li = document.createElement("li");
    li.setAttribute('id', add);
    li.appendChild(document.createTextNode(add))
    list.appendChild(li);
    /*Below lines can be used to updated the data on frontend */
    // list.innerHTML = "New Item ";
    count++;
    itemCountSpan.innerHTML = count;
    uncheckedCountSpan.innerHTML = count;
}

function removeTodo() {
    /*Add Logic for removing an existing TODO Item */
    list.removeChild(list.lastElementChild);
    /*Below lines can be used to updated the data on frontend */
    if (count == 0) {
        itemCountSpan.innerHTML = count;
    } else {
        count--;
        itemCountSpan.innerHTML = count;
        uncheckedCountSpan.innerHTML = count;
    }
}