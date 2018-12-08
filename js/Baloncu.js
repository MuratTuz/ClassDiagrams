


class Baloncu {
    constructor(ebat, renk) {
        this.rastgeleEbat = ebat;
        this.rastgeleRenk = renk;
    }

    balonSisir (sayi) {
        let balonlar = new Array(Balon());

        for (let index = 0; index < sayi; index++) {
            let balon = new Balon();
            balon.renk = this.rastgeleRenk;
            balon.ebat = this.rastgeleEbat;
            balonlar.push(balon);
            
        }

        return balonlar;
    }
}