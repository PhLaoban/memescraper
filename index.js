import fs from 'node:fs';
import https from 'node:https';
import fetch from 'node-fetch';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();

let i;
const urls = [];
const str = data;
const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

while ((i = rex.exec(str))) {
  urls.push(i[1]);
}

const urlcode = urls.slice(0, 10);

const dir = './Memes/';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
} else {
  console.log('error');
}

console.log(urlcode);
for (let n = 0; n < urlcode.length; n++) {
  https
    .get(urlcode[n], (res) => {
      const imagePath = `./memes/0${n + 1}.jpg`;
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
}
