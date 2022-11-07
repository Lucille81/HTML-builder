const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

fsPromises
  .readdir(path.join(__dirname, 'secret-folder'), {
    withFileTypes: true,
  })
  .then(results => {
    results.forEach(result => {
      if (!result.isDirectory()) {
        const fileName = result.name;
        const filePath = path.join(__dirname, 'secret-folder', fileName);
        const extantion = path.extname(filePath);

        fs.stat(filePath, (err, stats) => {
          console.log(
            `${fileName.replace(extantion, '')} - ${extantion.replace(
              '.',
              ''
            )} - ${+(stats.size / 1024).toFixed(3)}Kb`
          );
        });
      }
    });
  });
