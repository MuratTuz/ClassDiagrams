

const BALON_EBAT = {
    Z: 0,
    S: 50,
    M: 100,
    L: 200,
    XL:300,
    XXL:400
}

function Balon() {
    let ebat = BALON_EBAT.Z;
    let renk;
    let lokasyon = new Lokasyon(0,0);
    let durum = BALON_DURUMU.DOKUNULMAMIS;

    function patla() { 
        this.durum = BALON_DURUMU.PATLATILMIS;
        this.ebat = BALON_EBAT.Z;
     }

    function sis(balonEbat) { 
        this.durum = BALON_DURUMU.SISIRILIMIS;
        this.ebat = balonEbat;
     }
     
    function hareketEt(balonLokasyon) {
        this.lokasyon = balonLokasyon;
    }
    
}