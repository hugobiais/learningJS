var itemList = [];

function addItem(){

    //what would now be really cool would be to detect if the value of the text field contains a, 
    //in which case we know we have to split the input and add multiple items

    let newItem = document.getElementById("todoItem").value;
    let currentList = document.getElementById("todoList").innerHTML;

    if (newItem.includes(",")){
        newItem = newItem.split(", ");

        for (const item of newItem){
            currentList += `<li>${item}</li>`;
            itemList.push(item);
        }
    } else {
        currentList += `<li>${newItem}</li>`;
        itemList.push(newItem);
    }

    document.getElementById("todoList").innerHTML = currentList;
}

function removeItem(){

    let itemToRemove = document.getElementById("todoItem").value;

    //check if the value specified is contained in the array using includes
    if (itemList.includes(itemToRemove)){

        //get the index of the element we want to delete
        let index = itemList.indexOf(itemToRemove);

        //use splice to delete from the array without leaving holes
        itemList.splice(index, 1);

        //then rewrite the whole list with the new values
        let newList = "";

        for (const item of itemList){
            newList += `<li>${item}</li>`;
        }

        document.getElementById("todoList").innerHTML = newList;

    } else {
        //error message
        alert("You are trying to delete an item that doesn't exist! Try again.");
    }  
}