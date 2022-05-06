import fs from 'node:fs';
import https from 'node:https';

const greeting = process.argv[2];
const name1 = process.argv[3];

// console.log(process.argv);

const urlapi = `https://api.memegen.link/images/bender/${greeting}/${name1}.jpg`;

https
  .get(urlapi, (res) => {
    const imagePath = `./stretchexercise/01.jpg`;
    const stream = fs.createWriteStream(imagePath);
    res.pipe(stream);
    stream.on('finish', () => {
      stream.close();
      console.log('Image downloaded');
    });
  })
  .on('error', (err) => {
    // handle error
    console.log(err);
  });
