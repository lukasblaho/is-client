export default class Response {
    static parseJsonResponse(jsonResponse) {
        self = new this
        self._response = jsonResponse

        return self

    }

    isOK() {
        return this._response.code == 200
    }

    getPayload() {
        return this._response.data
    }
}
