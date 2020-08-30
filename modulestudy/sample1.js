/**
 * 以后以类的形式出现
 */

function sample() {
    this.a = 123;

    this.b = function() {
        console.log('b function triggered');
    }
}

/**
 * 那么外部引用进来的时候将以类的形式出现，所以也就要 new
 */
module.exports = sample;