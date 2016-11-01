export default class Response {
    static parseJsonResponse(jsonResponse) {
        if (typeof jsonResponse !== "object") {
            throw new Error('Incompatible type')
        }

        let self = new this()
        self._response = jsonResponse

        return self
    }

    isOK() {
        return this._response.statusCode === 200 || this._response.statusCode === 201
    }

    getPayload() {
        return this._response.payload
    }

    valid() {
        if (!this.isOK()){
            throw new Error('Response is not valid');
        }

        return true;
    }

    toString() {
        return JSON.stringify(this._response)
    }
}
