const fs = require('fs');

fs.unlink('/file-one', function(err) {
  console.log('file one is deleted');
});

fs.unlink('/file-two', function(err) {
  console.log('file two is deleted');
});

fs.unlink('/file-three', function(err) {
  console.log('file three is deleted');
});