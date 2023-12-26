import { VercelRequest, VercelResponse} from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {

    const { name } = request.body

    console.log("Hello ", name);
    return response.json({message: 'Hello World'}).status;
}