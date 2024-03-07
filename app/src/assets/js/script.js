document.getElementById('user_id').style.display = 'none'

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await getUsers()

        if (users.length > 0) {
            populateTable(users)
        }
    } catch (error) {
        console.error(error);
    }
})

document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault()

    let userID = document.getElementById('user_id').value
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    let userBirthday = document.getElementById('birthday').value

    let userBody = { name: userName, email: userEmail, birthday: userBirthday }

    if (userID != '') {
        try {
            const response = await editUser(userID, userBody)
            if (response.status == 200) {
                const users = await getUsers()
                populateTable(users)
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        try {
            const response = await addUser(userBody)
            if (response.status == 201) {
                const users = await getUsers()
                populateTable(users)
            }
        } catch (error) {
            console.error(error);
        }
    }

    document.getElementById('user_id').value = ''
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('birthday').value = ''
})


