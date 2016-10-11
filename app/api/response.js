export default class Response {
    static parseJsonResponse(jsonResponse) {
        self = new this
        self._response = jsonResponse

        return self
    }

    isOK() {console.log()
        return this._response.statusCode == 200
    }

    getPayload() {
        return this._response.payload
    }
}
