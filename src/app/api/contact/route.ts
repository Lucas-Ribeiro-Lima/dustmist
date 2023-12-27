import { VercelRequest, VercelResponse} from '@vercel/node'
import { MongoClient, Db } from 'mongodb'

let cachedDB: Db = null;

async function ConnectToDatabase(uri: string, database: string){
    if (cachedDB){
        return cachedDB;
    }

    const client = await MongoClient.connect(uri);
    const db = client.db(database)

    cachedDB = db;

    return db;
}

export async function GET(request: VercelRequest, response: VercelResponse){
    return response.status(402)
}

export async function POST(request: VercelRequest, response: VercelResponse) {

    const { name, last_name, email, phone, message } = request.body
    
    try {
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
        
        return response.status(201).json({message: "Contato inserido no MongoDB"})
    }   
    catch (error) {
        
        return response.status(500).json({message: "Não foi possivel inserir seu contato no banco"})
    }
}

