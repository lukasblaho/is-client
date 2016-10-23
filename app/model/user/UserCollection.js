import ArrayCollection from '../ArrayCollection'
import User from '../user/User'

export default class UserCollection extends ArrayCollection {

    createElement(object) {
        return User.createFromObject(object)
    }

    add(user) {
        this._data.push(user)
    }

    remove(userId) {
        this._data.forEach((user, index) => {
            if (user.getId() == userId) {
                delete this._data[index]
            }
        })
    }

    find(id) {
        let user = this._data.filter((item) => {
            return item.getId() == id
        }).pop()

        if (!user) {
            throw new Error('User not found by id')
        }

        return user
    }

    findByEmail(email) {
        return this._data.filter((item) => {
            return item.getEmail() == email
        }).pop()
    }

}
