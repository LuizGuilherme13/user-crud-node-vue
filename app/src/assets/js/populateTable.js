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
                <button onclick='btnEditUser(this)'>
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button id="btnDeleteUser"'>
                    <i class="fa-light fa-x" style="color: red;"></i>
                </button>
            </td>
        `
        tableBody.appendChild(row)

        row.querySelector('#btnDeleteUser').addEventListener('click', async (event) => {
            const row = event.target.closest('tr')
            const id = row.cells[0].innerHTML
            try {
                const response = await deleteUser(id)
                if (response.status == 200) {
                    location.reload()
                }
            } catch (error) {
                console.error(error);
            }
        })
    }
}

window.populateTable = populateTable