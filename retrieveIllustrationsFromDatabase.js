const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

async function retrieveIllustrationsFromDatabase () {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM illustrations')
    const illustrations = result.rows
    client.release()
    return illustrations
  } catch (error) {
    console.error('Error retrieving illustrations from the database:', error)
    throw error
  }
}

module.exports = retrieveIllustrationsFromDatabase
