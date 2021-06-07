const NEW_CONTACT_TEMPLATE = ``;

const template = document.getElementById('newContactTemlate')
const contactEl = document.getElementById('contactList')
const nameEl = document.getElementById('newInputName');
const surnameEl = document.getElementById('newInputSurname');
const telEl = document.getElementById('newInputTel');
// const table = document.getElementById('tableContact');

// table.addEventListener('click', removeRow);

document
    .getElementById('addContactBtn')
    .addEventListener('click', onAddContactBtnClick);

function onAddContactBtnClick() {
    if (isInputValid(nameEl.value && surnameEl.value && telEl.value)) {
        AddContact(nameEl.value, surnameEl.value, telEl.value);
        resetForm();
    }
}


// function removeRow(e) {
//     if (e.target.classList.contains('deleteBtn')) {
//         removeListEl(e.target.closest('.newContactRow'));
//     }
// }


// function removeListEl(el){
//     el.remove();
// }




function isInputValid (str) {
    return str.trim() !== '';
}

function AddContact(name, surname, tel) {
    const newContactHtml = getNewContactEl(name, surname, tel);

    contactEl.insertAdjacentHTML('beforeend', newContactHtml);
}

function getNewContactEl(name, surname, tel) {
    return template.innerHTML.replace('{{name}}', name).replace('{{surname}}', surname).replace('{{tel}}', tel);
}

function resetForm() {
    nameEl.value = '';
    surnameEl.value = '';
    telEl.value = '';
}