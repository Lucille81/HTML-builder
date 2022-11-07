const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({ input, output });
const writableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('Hello! Please enter your data...');

rl.on('line', input => {
  if (input.toString() !== 'exit') {
    writableStream.write(`${input}\n`);
  } else {
    return rl.close();
  }
});

rl.on('close', () => {
  console.log(`Bye! Your data is saved in 'text.txt'`);
});
