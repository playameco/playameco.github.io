
var fs = require('fs-extra');

fs.emptyDirSync('dist');

fs.copySync('src/images', 'dist/images');
