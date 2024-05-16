import pool from '../../lib/db';
import { NextResponse,NextRequest } from 'next/server';



export async function POST(req: Request) {
    const result = await req.json();
    console.log("도착")
    console.log(result)
    const client = await pool.connect();
    client.query(`DELETE FROM products WHERE name='${result.name}'`);
    const res = await client.query(`SELECT * FROM products where wareHouse='${result.wareHouse}'`)
    console.log("res: ",res.rows)
    return NextResponse.json(res.rows)
}
