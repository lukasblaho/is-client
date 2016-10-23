export default class Response {
    static parseJsonResponse(jsonResponse) {
        if (typeof jsonResponse !== "object") {
            throw new Error('Incompatible type')
        }

        let self = new this()
        self._response = jsonResponse

        return self
    }

    isOK() {console.log()
        return this._response.statusCode === 200
    }

    getPayload() {
        return this._response.payload
    }

    valid() { console.log(this)
        if (!this.isOK()){
            throw new Error('Response is not valid');
        }

        return true;
    }
}
