export default class Client {
    getId() {
        return this._id
    }

    getNumber() {
        return this._number
    }

    getName() {
        return this._name
    }

    getQuality() {
        return this._quality
    }

    static createFromObject(client) {
        let {id, number, name, quality, rejection, sellingPrice, eppp, epppot,
            transportationCost, rejectedPalettePrice, licenseFee, stackedPalettePrice} = client

        var self = new this()
        self._id = id
        self._number = number
        self._name = name
        self._quality = quality
        self._rejection = rejection
        self._sellingPrice = sellingPrice
        self._eppp = eppp
        self._epppot = epppot
        self._transportationCost = transportationCost
        self._rejectedPalettePrice = rejectedPalettePrice
        self._licenseFee = licenseFee
        self._stackedPalletePrice = stackedPalettePrice

        return self
    }
}



