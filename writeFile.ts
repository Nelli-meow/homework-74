import {promises as fs} from  'fs';


const run  = async () => {
    try {

        const datetime = new Date().toISOString();
        const fileName = `./${datetime}.txt`;

        await fs.writeFile(fileName, JSON.stringify('hello world!'));


    } catch (e) {
        console.error(e);
    }
}

run().catch(e => console.error(e));