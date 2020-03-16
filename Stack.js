let stack = {
    top: 0,
    storage: [],
    clear: function (item) {
        this.top = 0
        this.storage = [];
    },
    contains: function (value) {
        if (this.isEmpty()) return 'Empty';
        for (item of this.storage) {
            if (item === value)
                return true;
        }
        return false;
    },
    peek: function () {
        return this.isEmpty() ? 'Empty' : this.storage[this.top - 1];
    },
    push: function (value) {
        this.storage.push(value);
        this.top++;
        return true;
    },
    pop: function () {
        if (this.isEmpty()) return 'Empty';
        var result = this.storage[this.top - 1];
        this.top--;
        this.storage.length--;
        return result;
    },
    isEmpty: function () {
        return (this.top === 0) ? true : false;
    }
}
//
module.exports = stack