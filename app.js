const fs = require('fs');
const folderImages = './images';
const path = require('path');



fs.readdir(folderImages, (err, files) => {
    for(let i = 0; i < files.length; i++){
        if (/\s/.test(files[i])) {
           fs.renameSync( path.join(__dirname, '/images/' + files[i]), path.join(__dirname, '/' + files[i].replace(' ','-'))  );
        }
    }
});
