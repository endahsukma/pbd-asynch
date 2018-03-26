Async/Await adalah salah satu cara untuk mengatasai masalah asynchronous pada Javascript
selain menggunakan callback dan promise.

Untuk menggunakan Async-Await, kembalian dari suatu fungsi harus merupakan suatu Promise.
Async/Await tidak dapat berdiri tanpa adanya Promise.
Pada implementasi Async/Await, kita menggunakan kata kunci async sebelum fungsi.
Await sendiri hanya bisa digunakan pada fungsi yang menggunakan async.
Fungsi yang menggunakan async, sebenarnya mempunyai kembalian berupa promise. Tetapi,
Async/Await tidak dapat digunakan di top level kode yang kita gunakn, karena harus dibungkus oleh suatu fungsi.
Setiap baris yang menggunakan await, akan ditunggu sampai Asynchronous Promise tersebut di resolve.

link
https://medium.com/skyshidigital/promise-lets-async-await-76122d134eb