
//计算公式
//16：9  21：9  4：3  2：1
var w = 16; //比例宽
var h = 9; //比例高

var scale = w / h;
// var scale = 1.618;  //手输比例


function calculate (x, y) {
    var result;
    if (x === 'undefined' | y === 'undefined') {
        return;
    }

    if (x > 0) {
        thisB = x / scale;
        return result;
    }

    if (y > 0) {
        thisB = y * scale;
        return result;
    }
}

calculate(800,0);