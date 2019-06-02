var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map.get(key)
    if(typeof val === 'undefined') { return -1}
    this.map.delete(key)
    this.map.set(key,val)
    return val
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    //map.keys().next()可以取得到他排位第一的键值，
    // map.set()操作类似数组的push操作，将值保存在最顶的位置，这两点就是最关键的
    this.map.set(key, value)
    let keys = this.map.keys()
    while (this.map.size > this.capacity) {
        this.map.delete(keys.next().value)
    }
}


var LRU = new LRUCache(4)
LRU.put(1,1)
LRU.put(6,6)
LRU.put(2,2)
LRU.put(3,3)
LRU.put(4,4)
LRU.put(1,1)
LRU.put(3,3)
console.log(LRU.get(6))
LRU.put(6,6)

console.log(LRU.get(6))
