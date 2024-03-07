function btnEditUser(button) {

    const row = button.parentNode.parentNode
    const id = row.cells[0].innerHTML
    const name = row.cells[1].innerHTML
    const email = row.cells[2].innerHTML
    const birthday = row.cells[3].innerHTML

    document.getElementById('user_id').value = id
    document.getElementById('name').value = name
    document.getElementById('email').value = email
    document.getElementById('birthday').value = birthday
}

window.btnEditUser = btnEditUser