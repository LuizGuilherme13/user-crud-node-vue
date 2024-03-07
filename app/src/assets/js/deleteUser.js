async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        return response
    } catch (error) {
        throw error
    }
}

window.deleteUser = deleteUser