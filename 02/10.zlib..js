/**
 * 链式流，常见的就是压缩和解压缩
 * 
 * 
 * 
 * 
 */


/**
 * 压缩例子
 */
var fs = require('fs');
var zlib = require('zlib');

// fs.createReadStream('a.mp3')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('10.zlib.mp3.gz'));

// console.log('zip finish');

/**
 * 解压例子
 */


fs.createReadStream('10.zlib.mp3.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('b.mp3'));