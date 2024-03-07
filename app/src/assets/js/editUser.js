async function editUser(userID, userBody) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userID}`, {
            method: 'PATCH',
            body: JSON.stringify(userBody),
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        return response
    } catch (error) {
        throw error
    }
}

window.editUser = editUser