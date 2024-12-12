export class Http {

    constructor(url) {
        this._url = url;
        this._lastQueryStatus = null;
    }

    conection(onSuccesCallBack) {
        fetch(`${this._url}/`)
            .then((datos) => {
                datos.json().then((datos) => {
                    onSuccesCallBack(datos);
                })
            });
    }
}