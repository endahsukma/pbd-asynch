Callback hanyalah sebuah nama teknik dalam menggunakan function. 
contoh program
const fs = require('fs');

/**
  Tiga operasi menghapus file di bawah ini, walaupun disusun berurutan
  tetapi belum tentu selesainya berurutan dari operasi 1 sampai operasi 3.
*/

// Operasi 1
fs.unlink('/file-one', function(err) {
  console.log('file one is deleted');
});

// Operasi 2
fs.unlink('/file-two', function(err) {
  console.log('file two is deleted');
});

// Operasi 3
fs.unlink('/file-three', function(err) {
console.log('file three is deleted');
});

link
https://blog.framework.id/memahami-callback-untuk-memprogram-asynchronous-di-javascript-a36029d4ebf8