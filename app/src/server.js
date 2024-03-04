const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001

const staticDir = path.join(__dirname, 'assets')

app.use('/css', express.static(path.join(staticDir, 'css')))
app.use('/js', express.static(path.join(staticDir, 'js')))

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})