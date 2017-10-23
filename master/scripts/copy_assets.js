var fs = require('fs-extra');

fs.copySync('public', 'build', {
  dereference: true,
  filter: file => file !== 'public/index.html'
});