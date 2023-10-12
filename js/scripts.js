function newItem(){

    // adding the new element 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something before clicking button!");
    } else {
        $('#list').append(li);
    }

    // adding the function to cross an item off the list
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //adding the delete button "X"
    let crossOutButton = $('<crossOutButton></crossOutButton');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //adding class as "delete" in the list
    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete")
    }
    $('#list').sortable();
}