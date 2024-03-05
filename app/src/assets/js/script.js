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

    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    let userBirthday = document.getElementById('birthday').value

    let user = { name: userName, email: userEmail, birthday: userBirthday }
    try {
        const response = await addUser(user)

        if (response.status == 201) {
            const users = await getUsers()
            populateTable(users)
        }

    } catch (error) {
        console.error(error);
    }
})