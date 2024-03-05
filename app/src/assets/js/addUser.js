async function addUser(params) {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        return response
    } catch (error) {
        throw error
    }
}