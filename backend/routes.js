const express = require('express')
const router = express.Router()
const { db } = require('./database/conn')

router.get('/users', async (_, res) => {
    const client = await db.connect()

    const result = await client.query('SELECT * FROM user_account')

    client.release()

    res.status(200).send(result.rows)
})

module.exports = router