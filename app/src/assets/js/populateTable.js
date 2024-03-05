const tableBody = document.querySelector('#user_list tbody')
const options = { day: '2-digit', month: '2-digit', year: 'numeric' }

function populateTable(users) {
    tableBody.innerHTML = ''

    for (const user of users) {
        const birthday = new Date(user.birthday)
        const birthdayFmt = birthday.toLocaleDateString(undefined, options)

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${birthdayFmt}</td>
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

window.populateTable = populateTable