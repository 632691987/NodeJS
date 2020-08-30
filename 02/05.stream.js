/*
	同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 */
var fs = require("fs");


/**
 * 
 * 流的四个类型：
 * - Readable: 可读操作
 * - Writeable: 可写操作
 * - Duple" 可读可写操作
 * - Transform: 操作被写入数据，然后读出结果
 * 
 * 常用事件：
 * - data: 当有数据的时候触发
 * - finish:所有数据被写入之后触发
 * - end: 读取完毕
 * - error: 发生错误的时候触发
 * 
 */



//流式文件写入
//创建一个可写流
/*
	fs.createWriteStream(path[, options])
		- 可以用来创建一个可写流
		- path，文件路径
		- options 配置的参数
 */


var ws = fs.createWriteStream("hello3.txt");

//可以通过监听流的open和close事件来监听流的打开和关闭
/*
	on(事件字符串,回调函数)
		- 可以为对象绑定一个事件

	once(事件字符串,回调函数)
		- 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效

* */
ws.once("open", function() {
    console.log("流打开了~~~");
});

ws.once("close", function() {
    console.log("流关闭了~~~");
});

ws.on('finish', function() {
    console.log("finish event emiited");
});

//通过ws向文件中输出内容
ws.write("aaaaaaaaaaaaaaaaaaaaaaa");
ws.write("bbbbbbbbbbbbbbbbbbbbbbb");
ws.write("ccccccccccccccccccccccc");
ws.write("ddddddddddddddddddddddd");
ws.write("eeeeeeeeeeeeeeeeeeeeeee");

// can not use close function, otherwise only the first sentence would be input
//关闭流
ws.end();