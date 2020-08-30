/*
	Buffer(缓冲区)
		- Buffer的结构和数组很像，操作的方法也和数组类似
		- 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
		- 使用buffer不需要引入模块，直接使用即可
		- 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
			buffer中每一个元素的范围是从00 - ff   0 - 255
			00000000 - 11111111

			计算机 一个0 或一个1 我们称为1位（bit）

			8bit = 1byte（字节）
			1024byte = 1kb
			1024kb = 1mb
			1024mb = 1gb
			1024gb = 1tb

			buffer中的一个元素，占用内存的一个字节

		- Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作

 */

var str = "ABCD";

//put buffer from string
//var buf = Buffer.from(str);

//console.log(buf.length);//占用内存的大小
//console.log(str.length);//字符串的长度
//console.log(buf);//用十六进制存储

//buffer构造函数都是不推荐使用的
//var buf2 = new Buffer(10);//10个 byte 的buffer
//console.log(buf2.length);
//console.log(buf2);

/**
 * Notice: there will be no out array length exception, once allocated, then always specific length
 */

var buf2 = Buffer.alloc(10);
buf2[0] = 0x41; //A
buf2[1] = 0x42; //B
buf2[2] = 0x43; //C
buf2[3] = 0x44; //D
buf2[4] = 0x45; //E
buf2[5] = 0x46; //F
buf2[6] = 0x47; //G
buf2[7] = 0x48; //H
buf2[8] = 0x49; //I
buf2[9] = 0x4a; //J
buf2[10] = 0x4a; //K --> no use, but no exception
console.log(buf2.toString());

for (var i = 0; i < buf2.length; i++) {
    //force to in OCX
    console.log(buf2[i].toString(16));
}



//Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据

var buf3 = Buffer.allocUnsafe(10);
buf3.write('This is Node JS language');
console.log(buf3.toString('utf8', 3, 9));
console.log(buf3.toString());