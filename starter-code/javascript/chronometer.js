class Lapso {

    constructor() {
        this.ms = 0;
        this.s = 0;
        this.min = 0;
    }

    getTextoMS() {
        return (
            (this.ms < 100 ? '0' : '') +
            (this.ms < 10 ? '0' : '')
            + this.ms.toString()
        );
    }

    getTextoS() {
        return (this.s < 10 ? '0' : '') + this.s.toString();
    }

    getTextoMin() {
        return (this.min < 10 ? '0' : '') + this.min.toString();
    }

    addSegundo() {

        this.s++;

        if (this.s === 60) {
            this.min++;
            this.s = 0;
        }

    }

    add10MiliSegundo() {

        this.ms+=10;

        if (this.ms === 1000) {
            this.addSegundo();
            this.ms=0;
        }

    }
}


class Chronometer {


    constructor(callBackOnAvance) {


        this.callBackOnAvance = callBackOnAvance;

        this.inicializarLapso();

        this.listaLapsos = [];

        this.intervaloMS = 10; //se cuenta por segundos
        this.intervalId = 0;
    }

    inicializarLapso() {
        this.lapso = new Lapso();
    }


    start_or_stop() {

        if (this.intervalId === 0) {
            //Esta en STOP asi que hacemos un start
            this.inicializarLapso();

            let fnOnAvanzaCronometro = () => {
                this.lapso.add10MiliSegundo()
                this.callBackOnAvance(this.lapso);
            };

            this.intervalId = setInterval(fnOnAvanzaCronometro, this.intervaloMS);

        } else {

            //estamos en RUN asi que hacemos stop
            clearTimeout(this.intervalId);
            this.intervalId = 0;

        }


    }

    getModo() {
        return this.intervalId === 0 ? 'STOP' : 'RUNNING';
    }

    reset() {

        this.inicializarLapso();

        this.intervalId = 0;
        clearTimeout(this.intervalId);

        this.listaLapsos = [];

    }


}