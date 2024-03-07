const express = require('express')
const router = express.Router()
// const bodyParser = require('body')
const { db } = require('./database/conn')

router.get('/users', async (_, res) => {
    const client = await db.connect()

    client.query('SELECT * FROM user_account', (error, results) => {
        if (error) {
            throw error
        }
        client.release()
        res.status(200).send(results.rows)
    })
})

router.post('/users', async (req, res) => {
    const { name, email, birthday } = req.body;
    const client = await db.connect()
    const query = {
        text: 'INSERT INTO user_account(name, email, birthday) VALUES($1, $2, $3) RETURNING *',
        values: [name, email, birthday]
    }

    client.query(query, (error, result) => {
        if (error) throw error

        client.release()
        res.status(201).json(result.rows[0])
    })
})

router.patch('/users/:id', async (req, res) => {
    const id = req.params.id
    const { name, email, birthday } = req.body

    const client = await db.connect()
    const query = {
        text: 'UPDATE user_account SET name = $1, email = $2, birthday = $3 WHERE id = $4',
        values: [name, email, birthday, id]
    }

    client.query(query, (error, _) => {
        if (error) {
            throw error
        }

        client.release()
        res.status(200).send({})
    })
})

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id

    const client = await db.connect()

    client.query('DELETE FROM user_account  WHERE id = $1', [id], (error, _) => {
        if (error) {
            throw error
        }

        client.release()
        res.status(200).send({})
    })
})

module.exports = router