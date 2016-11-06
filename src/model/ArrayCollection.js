export default class ArrayCollection {
    constructor(input) {
        this._data = []

        if (typeof input === 'object') {
            input.forEach((item) => {
                var user = this.createElement(item)
                this._data.push(user)
            })
        }
    }

    forEach(callback) {
        this._data.forEach(callback)
    }

    length() {
        return this._data.length
    }

    map(callback) {
        return this._data.map(callback)
    }

    static fromArray(responseData) {
        return new this(responseData)
    }
}
