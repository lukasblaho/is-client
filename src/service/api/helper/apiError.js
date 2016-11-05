export default function ApiError(error) {
    this.name = 'ApiError';
    this.stack = (new Error()).stack;
    this._error = error
}

ApiError.prototype = new Error()
ApiError.prototype.getErrorCode = function() {
    return this._error.statusCode   
}
ApiError.prototype.getErrorMessage = function() {
    return this._error.error
}