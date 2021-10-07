const addNoteBtn = document.getElementById('addNoteBtn');

const updateNotes = () => {
    let notesText = [];
    let allTextarea = document.querySelectorAll('textarea');
    allTextarea.forEach((textarea) => {
        if (textarea.value.trim() != '') {
            notesText.push(textarea.value)
        }
    });
    localStorage.setItem('notes', JSON.stringify(notesText))
}
const initialCall = () => {
    let allTextarea = JSON.parse(localStorage.getItem('notes'));
    allTextarea.forEach((textarea) => {
        if (textarea != '') {
            addNewNote(textarea);
        }
    });
}

const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('col-sm-3', 'note');
    const noteHtml = `<div class="row">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <textarea name="content" cols="30" rows="5">${typeof text == 'string' && text != '' ? text : ''}</textarea>
                    </div>
                    <div class="col-sm-12 d-flex justify-content-center">
                        <button class="btn btn-danger m-2 delete" >Delete</button>
                    </div>
                </div>`;

    note.insertAdjacentHTML("afterbegin", noteHtml);
    notes.appendChild(note);

    // Getting the reference
    const deleteBtn = note.querySelector('.delete');
    const textarea = note.querySelector('textarea');

    // Deleting the node
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateNotes();
    });
    textarea.addEventListener('keyup', () => {
        updateNotes();
    });
}

initialCall();
addNoteBtn.addEventListener('click', addNewNote);

