// Dependencies ////////////////////////////////////////////
import 'dotenv/config'
import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

// Configuration ///////////////////////////////////////////
const PORT = process.env.PORT || 5163;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Query functions /////////////////////////////////////////
export const query = async function (sql, params) {
  let client;
  let results = [];
  try {
    client = await pool.connect();
    const response = await client.query(sql, params);
    if (response && response.rows) {
      results = response.rows;
    }
  } catch (err) {
    console.error(err);
  }
  if (client) client.release();
  return results;
};

export const queryChapters = async function () {
  const sql = 'SELECT id, title FROM chapters;';
  const results = await query(sql);
  return results;
};

export const queryIllustrations = async function () {
  const sql = 'SELECT id, description FROM illustrations;';
  const results = await query(sql);
  return results;
};

// Configure the web server ////////////////////////////////
const app = express();

app
  .use(express.static('public'))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', 'views')
  .set('view engine', 'ejs');

// Route to render the chapters.ejs template //////////////
app.get('/chapters', async (req, res) => {
  const chapters = await queryChapters();
  res.render('pages/chapters', { chapters });
});

app.get('/illustrations', async (req, res) => {
  const illustrations = await queryIllustrations();
  res.render('pages/illustrations', { illustrations });
});

// Ready for browsers to connect ///////////////////////////
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

