import fs from 'node:fs';
import https from 'node:https';
import fetch from 'node-fetch';

// fetching the Website, filtering the img links and pushing them into an array

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

// created a new variable that slices only the first ten urls of the fetch function

const urlcode = urls.slice(0, 10);

// created another variable just for the saving folder

const dir = './Memes/';

// if else statement that actually creates the folder of the "dir" variable (if this folder doesn't exist -> create a new one with mkdirsync)

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
} else {
  console.log('error');
}

// created a loop which counts through the whole url array, saves them as jpg and renames them up from 1-10
// had to create another if else statement for all jpgs < 9 so that the last jpg is saved as 10.jpg instead of 010.jpg
// .get -> start of the actual download img function which requires node fs and https package from node
// imegePath -> creating img path and renaming it
// fs.createWriteStream(imagePath) -> creating a stream to the path but actually not starting it
// res.pipe(stream) -> pipe connecting to writeStream and starting it below with stream.on and turning it off again with stream.close

for (let n = 0; n < urlcode.length; n++) {
  if (n < 9) {
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
  // else statement that renames the file for the 10th picture properly as 10.jpg
  else {
    https
      .get(urlcode[n], (res) => {
        const imagePath = `./memes/${n + 1}.jpg`;
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
}
