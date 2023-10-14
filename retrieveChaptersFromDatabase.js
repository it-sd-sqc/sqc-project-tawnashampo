const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

async function retrieveChaptersFromDatabase () {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM chapters')
    const chapters = result.rows
    client.release()
    return chapters
  } catch (error) {
    console.error('Error retrieving chapters from the database:', error)
    throw error
  }
}

module.exports = retrieveChaptersFromDatabase
