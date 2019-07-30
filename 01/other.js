var fs = require("fs");

/**
fs.stat("b.mp3", function(err, stat){
	console.log(stat);
});
**/

//fs.unlinkSync("b.mp3"); // this means delete file

/**
fs.readdir(".", function(err, files){
	console.log(files[5]);
});
*/

//fs.rename(oldPath, newPath, callback) --> this could make it move files!

fs.watchFile("hello2.text", {interval:1000}, function(curr, prev){
	console.log("======================================================");
	console.log(prev.size - curr.size);
	console.log("======================================================");
})