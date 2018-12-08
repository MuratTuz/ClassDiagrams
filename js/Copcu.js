



class Copcu {
    constructor(){
        this.torba = new Array(Balon());
    }

    topla(tumBalonlar){
       let patlamisBalonlar = tumBalonlar.map( element => element.durum == BALON_DURUMU.PATLATILMIS);
        this.torba.push(patlamisBalonlar);
    }
}