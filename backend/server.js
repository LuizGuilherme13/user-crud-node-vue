const express = require('express')
const app = express()
const cors = require('cors');
const { db } = require('./database/conn')
const routes = require('./routes')

const PORT = 3000

app.use(cors())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})