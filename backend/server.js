const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes')

const PORT = 3000

const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}; PORT

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})