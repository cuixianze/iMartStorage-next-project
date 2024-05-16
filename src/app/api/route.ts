import exp from 'constants';
import pool from '../lib/db';
import { NextResponse,NextRequest } from 'next/server';

export async function GET(req: any){

    //using url to find prams
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const warehouse = searchParams.get('warehous')
    
    // console.log("urlsearchParams is",warehouse)



    // const data = await req.json()
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM products WHERE products.warehouse = ${warehouse}`);

 
    console.log("return data",result.rows)

    return NextResponse.json(result.rows)

}

export async function POST(req: Request) {
    const result = await req.json();
    console.log("도착")
    console.log(result)
    const client = await pool.connect();
    client.query(`INSERT INTO products (name, wareHouse, quantity, expiration_date) VALUES ('${result.name}', '${result.wareHouse}', '${result.quantity}', '${result.expiration_date}')`);

    return NextResponse.json({})
}