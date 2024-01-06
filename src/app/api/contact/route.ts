import { MongoClient, Db } from 'mongodb'
import { NextResponse } from 'next/server';

let cachedDB: Db = null;

async function ConnectToDatabase(uri: string, database: string) {
    if (cachedDB) {
        return cachedDB;
    }

    try {
        const client = await MongoClient.connect(uri);
        const db = client.db(database)

        cachedDB = db;

        return db;
    }

    catch (error) {
        throw new Error(`Error connecting to the database: ${error.message}`);
    }
}
interface ContactObject {
    id: string,
    name: string,
    last_name: string,
    email: string,
    phone: string,
    message: string,
    dataContact: Date,
}

export async function GET() {

    try {
        const db = await ConnectToDatabase(process.env.MONGODB_URI, process.env.MONGODB_DB)
        const collection = db.collection<ContactObject>('contacts');

        const findContacts = await collection.find({})
        const response: ContactObject[] = []

        for await (const document of findContacts) {
            response.push(document) 
        }

        return NextResponse.json(response);

    } catch (error) {
        throw new Error(`Error fetching data from database: ${error.message}`)
    }

}

export async function POST(req: Request) {

    try {
        const { name, last_name, email, phone, message } = await req.json()

        const db = await ConnectToDatabase(process.env.MONGODB_URI, process.env.MONGODB_DB)

        const collection = db.collection('contacts');

        await collection.insertOne({
            name,
            last_name,
            email,
            phone,
            message,
            dataContact: new Date(),
        })

        return NextResponse.json("Submit Form Sucess");

    }

    catch (error) {
        throw new Error(`Error inserting data into the database: ${error.message}`);
    }
}

