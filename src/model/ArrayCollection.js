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

    static fromArray(responseData) {
        return new this(responseData)
    }
}
