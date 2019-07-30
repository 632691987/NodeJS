/**
module.exports.name = "孙悟空";
module.exports.age = 18;
module.exports.sayName = function () {
	console.log("我是孙悟空~~~");
};
**/

//exports = module.exports ---> 这个是NodeJS 的默认行为

//module.exports 不等于 exports. 如果下面是 exports 而不是module.exports，否则出现语法错误。
//除非使用下面的语法:
//exports = module.exports;

//exports 只能通过 exports.x 的形式。而整体变量的话，永远只能够是 module.exports = {....}, 记住，是永远
module.exports = {
		name:"Vincent",
		age:38,
		sayName: function() {
			console.log("I am here");
		}
}


