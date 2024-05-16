import pool from '../../lib/db';
import { NextResponse,NextRequest } from 'next/server';



export async function POST(req: Request) {
    const result = await req.json();
    console.log("/update/도착")
    console.log(result)
    const client = await pool.connect();
    const res = await client.query(`UPDATE products SET quantity = '${result.quantity}' WHERE name = '${result.name}'`);
    // const res = await client.query(`SELECT * FROM products where wareHouse='${result.wareHouse}'`)
    // console.log("res: ",res.rows)
    return NextResponse.json(res.rows)
}
