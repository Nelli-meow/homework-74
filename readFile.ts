import {promises as fs} from  'fs';

const fileName = './messages.json';

interface MessageContext {
    message: string;
}

const run = async () => {
    try {
        const fileContent = await fs.readFile(fileName);
        const result = await JSON.parse(fileContent.toString()) as MessageContext;

        console.log('сообщение ' ,result.message);
    } catch (e) {
        console.error(e);
    }
}

run().catch((err) => console.log(err));