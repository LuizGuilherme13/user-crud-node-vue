const db = require('./database/pg')
const express = require('express')
const app = express()

const { User } = require('./models/user')

const port = 3000

app.use(express.static(__dirname))
app.use(express.json())
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})

app.get('/user', async (_, res) => {
    const users = await User.getAll()
    res.json(users.rows)
})

app.post('/user', async (req, res) => {
    const body = req.body
    const user = new User(body.name, body.email, body.birthday)

    user.save()

    res.end();
})

app.delete('/', async (req, res) => {

})


