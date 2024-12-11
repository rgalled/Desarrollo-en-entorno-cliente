import { InputMapper } from "./mapper/InputMapper.js"
import { Config } from "./config/Config.js"

export class Validador {
    #operations = {
        "euro": this.#euroAddEvents,
        "date": this.#dateAddEvents
    }

    constructor() {
        [...document.forms].forEach((item) => {
            InputMapper(item.elements).forEach((item) => {
                this.#operations[item.type](item);
            });
        })
    }

    #euroAddEvents(item) {
        item.object.addEventListener('input', (event) => {
            const euros = event.target.value;
            const euroPattern = /^\d+(\.\d{1,2})?$/;
            if (!euroPattern.test(euros)) {
                document.getElementById('errorEuros').textContent = 'Por favor, introduce un valor válido en euros (máximo dos decimales).';
            }
            else {
                document.getElementById('errorEuros').textContent = '';

            }
        });
    }

    #dateAddEvents(item) {
        item.object.addEventListener('input', (event) => {
            const fecha = event.target.value;
            const fechaPattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
            if (!fechaPattern.test(fecha)) {
                document.getElementById('errorFecha').textContent = 'Por favor, introduce una fecha válida (dd/mm/aaaa).';
            }
            else {
                document.getElementById('errorFecha').textContent = '';
            }
        });
    }
}