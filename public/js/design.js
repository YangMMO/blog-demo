
var cObj = [{   //常见比例
        w: 16,
        h: 9
    }, {
        w: 21,
        h: 9
    }, {
        w: 4,
        h: 3
    }, {
        w: 2,
        h: 1
    },{
        w: 0,
        h: 0
    }]

var scale = cObj[0].w / cObj[0].h; //计算比例值

/**
 * 换算器逻辑
 * @param {Number} num 
 * @param {Boolean} ops 
 */
function calculate (num, ops) {
    var result;
    if (num === 'undefined') {
        return;
    }

    if (num > 0 && ops === 0) {
        result = num / scale;
        return Math.round(result);
    }

    if (num > 0 && ops === 1) {
        result = num * scale;
        return Math.round(result);
    }
}

/* ------------------------------- */

var calculator = document.getElementById('calculator');
var cInp = calculator.querySelectorAll('input');

var calculatorType = document.querySelectorAll('#calculator-type > li > a');

var customizeInp = document.querySelectorAll('#calculator-type > li > a > input');

for (var i = 0; i < calculatorType.length; i++) {
    calculatorType[i].index = i;
    calculatorType[i].addEventListener('click', function (e) {
        for (var i = 0; i < calculatorType.length; i++) {
            calculatorType[i].className = '';
        }
        this.className = 'c-active';
        scale = cObj[this.index].w / cObj[this.index].h;
    }, false)
}

/**
 * 焦点事件
 * @param {Node} inp 
 */
function onFocus (inp) {
    inp.placeholder = ''
}

/**
 * 失去焦点
 * @param {Node} inp 
 */
function onBlur (inp) {
    inp.placeholder = '输入';
}


/**
 * 按键监听 & 换算
 * @param {Object} event 
 * @param {Node} inp 
 * @param {Boolean} ops 
 */
function onKeyUp (event, inp, ops) {
    var regex = /^[0]+/g;

    if (event.keyCode === 13 && inp.value !== '') {
        var reslut = calculate(inp.value, ops);
        if (ops === 0) {
            cInp[1].value = reslut;
        } else {
            cInp[0].value = reslut;
        }
        return
    }

    if (parseInt(event.key) >= 0) {
        inp.value = inp.value.replace(regex,"")
    } else {
        inp.value = '';
        return
    }
}



function isCustomize () {
    if (customizeInp[0].value !== '' && customizeInp[1].value !== '') {
        cObj[4].w = parseInt(customizeInp[0].value);
        cObj[4].h = parseInt(customizeInp[1].value);
        scale = cObj[4].w / cObj[4].h;
    }
}