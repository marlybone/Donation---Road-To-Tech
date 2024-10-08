import pool from "../../../../backend/db";


export async function GET(req) {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    return new Response(JSON.stringify({ result: rows[0].result }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    return new Response(JSON.stringify({ error: 'Database connection failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
