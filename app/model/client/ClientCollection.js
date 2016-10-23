import ArrayCollection from '../ArrayCollection'
import Client from './Client'

export default class ClientCollection extends ArrayCollection {

    createElement(object) {
        return Client.createFromObject(object)
    }

    add(client) {
        this._data.push(client)
    }

    remove(clientId) {
        this._data.forEach((client, index) => {
            if (client.getId() == clientId) {
                delete this._data[index]
            }
        })
    }

    get(id) {
        let client = this._data.filter((item) => {
            return item.getId() == id
        }).pop()

        if (!client) {
            throw new Error ('Client not found by id')
        }

        return client
    }

}
