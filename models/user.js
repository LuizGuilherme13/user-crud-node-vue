const db = require('../database/pg')

class User {
    constructor(name, email, birthday) {
        this.name = name
        this.email = email
        this.birthday = birthday
    }

    async save() {
        await db.connect()

        const query = {
            text: 'INSERT INTO user_account(name, email, birthday) VALUES($1, $2, $3)',
            values: [this.name, this.email, this.birthday]
        }

        try {
            await db.query(query)
        } catch (e) {
            console.error(e);
        } finally {
            await db.end()
        }
    }

    static async getAll() {
        await db.connect()

        try {
            const res = await db.query('SELECT * FROM user_account')

            return res
        } catch (e) {
            console.error(e);
        } finally {
            await db.end()
        }
    }

    async delete(email) {
        await db.connect()

        try {
            await db.query('DELETE FROM user_account WHERE email = $1', email)
        } catch (e) {
            console.error(e);
        } finally {
            await db.end()
        }
    }
}

module.exports = { User }