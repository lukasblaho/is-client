export default class User {
    getId() {
        return this._uuid
    }

    getFirstName() {
        return this._firstName
    }

    getLastName() {
        return this._lastName
    }

    getEmail() {
        return this._email
    }

    static createFromObject(user) {
        let {uuid, firstName, lastName, email} = user

        var self = new this()
        self._uuid = uuid
        self._firstName = firstName
        self._lastName = lastName
        self._email = email

        return self
    }
}



