- Upon inspecting https://memegen-link-examples-upleveled.netlify.app/, we found that each image is an `<img>`, which is inside of a `<div>` and inside of an `<a>`
  ![Screen Shot 2022-05-04 at 12 18 40](https://user-images.githubusercontent.com/1935696/166663626-3b6f989e-8dac-46bc-9a8d-caf2dc0303da.png)

## TODO

- [ ] Connect to the link (URL) in Node.js - other words: "loading", "open"
  - [ ] We may decide to set the URL as a const
  - [ ] We may decide to open a browser for this (using our Node.js program)
  - [ ] Research shows us ways to do this in Node.js
- [ ] Get html from URL (this will be in a "string" inside of an "HTTP response")
- [ ] Locate the image URLs in the html string
  - [ ] Maybe we somehow turn the string into an array to make this easier? Potential data structures: array of objects (see below), array of strings
- [ ] Take the array of image urls and extract the first 10
- [ ] Make the folder `memes`
- [ ] Download / transfer / save
  - [ ] Connect to the image URL
  - [ ] Receive image data from the response (maybe a string)
  - [ ] Generate the correct file name
  - [ ] Store image data in the file path in the folder (maybe you need to create the file first)
- [ ] Add `memes` to `.gitignore`
- [ ] Test that the program runs multiple times without errors
