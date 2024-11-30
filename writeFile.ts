import fs from  'fs';

const fileName = './messages.txt';

fs.writeFile(fileName, 'Hello World', (err) => {
    if (err) {
        console.error(err);
    }

    console.log('файл создался')
});