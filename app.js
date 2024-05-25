function addNote() {
    var myContainer = document.getElementById('container');
    var myDiv = document.createElement('div');
    var myInput = document.createElement('input');
    myInput.setAttribute('id', 'input')
    var delBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    var updateBtn = document.createElement('button');
    delBtn.setAttribute('onclick', 'deleteNote(event)')
    editBtn.setAttribute('onclick', 'editNote(event)')
    updateBtn.setAttribute('onclick', 'updateNote(event)')
    delBtn.setAttribute('class', 'btn')
    editBtn.setAttribute('class', 'btn')
    updateBtn.setAttribute('class', 'btn')
    delBtn.innerHTML = 'Delete'
    editBtn.innerHTML = 'Edit'
    updateBtn.innerHTML = 'Update'
    myDiv.appendChild(myInput);
    myDiv.appendChild(delBtn);
    myDiv.appendChild(editBtn);
    myDiv.appendChild(updateBtn);
    myContainer.appendChild(myDiv);
}

function deleteNote(event) {
    event.target.parentElement.remove();
}

function updateNote(event) {
    var myNote = event.target.parentElement;
    myNote.innerHTML = document.getElementById('input').value + '<button class="btn" onclick="editNote(event)">Edit</button>' + '<button class="btn" onclick="deleteNote(event)">Delete</button>'
}

function editNote(event) {
    var abc = event.target.parentElement;
    var oldHTML = event.target.parentElement.firstChild.textContent;
    abc.innerHTML = `<input id="input" value="${oldHTML}" /><button class="btn" onclick="updateNote(event)">Update</button>`

}