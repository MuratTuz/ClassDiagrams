

class Lokasyon {
    constructor(lokasyonX, lokasyonY){
        this.x = lokasyonX;
        this.y = lokasyonY;
    }
    getLokasyon() {
        return { xAxis:this.x, yAkis:this.y}
    }
}