const tableBody = document.querySelector('#user_list tbody')

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await fetchUsers()

        if (users.length > 0) {
            populateTable(users)
        }
    } catch (error) {
        console.error(error);
    }
})

const populateTable = (users) => {
    tableBody.innerHTML = ''

    for (const user of users) {
        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.birthday}</td>
            <td>
                <button onclick='editUser(this)'>
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button onclick='deleteUser(this)'>
                    <i class="fa-light fa-x" style="color: red;"></i>
                </button>
            </td>
        `
        tableBody.appendChild(row)
    }
}