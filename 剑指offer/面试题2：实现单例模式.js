// 惰性单例

// 创造实例
function createDiv() {
    var div = document.createElement('div')
    return div
}

// 保证仅生成一个
function getSingle(fn) {
    var result
    return function () {
        return result || (result=fn.apply(this,arguments))
    }
}

var Single = getSingle(fn)
