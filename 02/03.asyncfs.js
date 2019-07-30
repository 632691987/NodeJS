/**
	异步文件写入
 fs.open(path, flags[, mode], callback)
 	- 用来打开一个文件
    - 异步调用的方法，结果都是通过回调函数的参数返回的
 	- 回调函数两个参数：
 		err 错误对象，如果没有错误则为null
 		fd  文件的描述符
 fs.write(fd, string[, position[, encoding]], callback)
 	- 用来异步写入一个文件

 fs.close(fd, callback)
 	- 用来关闭文件

 */

//引入fs模块
var fs = require("fs");


//打开文件
//Notice: error parameter always on the first place!
/**
 * 
 * 
 * r -> read
 * w -> write on start
 * a -> append to write
 */
fs.open("hello2.txt","w",function (err , fd) {//var fd = fs.openSync("./hello.txt" , "w");
	//判断是否出错
	if(!err){
		//如果没有出错，则对文件进行写入操作
		fs.write(fd,"Write in ASYNC style 2",function (err) {//fs.writeSync(fd , "VV", 0);
			if(!err){
				console.log("写入成功~~");
			}
			//关闭文件
			fs.close(fd , function (err) {//fs.closeSync(fd);
				if(!err){
					console.log("文件已关闭~~~");
				}
			});
		});
		
		fs.write(fd,"\nWrite in ASYNC style 4",function (err) {});
	}else{
		console.log(err);
	}
});

console.log("程序向下执行~~~");

