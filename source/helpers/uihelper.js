export const checkFileExisting = {
    avataUrl : '/upload/users/'
};

/* Asynchronously Check if a File Exists in Node.js */
/*
https://futurestud.io/tutorials/node-js-check-if-a-file-exists

const { promises: Fs } = require('fs')
async function exists (path) {  
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}

// Example:
const Path = require('path')  
const path = Path.join(__dirname, "existing-file.txt")

await exists(path)  
*/

/* Synchronously Check if a File Exists */
/*
const Fs = require('fs')  
const Path = require('path')

const path = Path.join(__dirname, "existing-file.txt")

Fs.existsSync(path)  
*/

/* Use the @supercharge/filesystem Package */
/*
const Path = require('path')  
const Fs = require('@supercharge/filesystem')

const path = Path.join(__dirname, "existing-file.txt")

await Fs.exists(path)  
// true
*/