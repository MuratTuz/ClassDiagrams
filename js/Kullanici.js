



class Kullanici {
    constructor(sayi) {
        this.balonSayisi = sayi;
    }

    sayiSoyle() {
        return this.balonSayisi;
    }

    patlat(balon) {
        balon.patla();
    }
}