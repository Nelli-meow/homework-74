import {promises as fs} from  'fs';

const fileName = './messages.txt';

const run  = async () => {
    try {

        await fs.writeFile(fileName, JSON.stringify('hello world!'));

    } catch (e) {
        console.error(e);
    }
}

run().catch(e => console.error(e));