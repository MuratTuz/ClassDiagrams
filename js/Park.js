


class Park {
    constructor(pAlan, pCopculer, pBalonlar){
        this.alan = pAlan; //Lokasyon tipinde {Xmax,Ymax}
        this.copculer = pCopculer;
        this.balonlar = pBalonlar;
    }

    balonSayisi(balonDurumu){
        return balonlar.map( (element, index) => {
            element.durum == balonDurumu
            return index;});
    }

    rastgeleDagit(dagitilacakBalonlar){
        dagitilacakBalonlar.forEach(element => {
            element.lokasyon = { Math.floor(Math.random() * this.alan.getLokasyon().xAkis), 
                Math.floor(Math.random() * this.alan.getLokasyon().yAkis) }        
        });
    }

    balonBul (balonLokasyon) {
        let bulunacakBalon = this.balonlar.map ( element => {
            element.lokasyon.getLokasyon().xAkis == balonLokasyon.getLokasyon().xAkis &&
            element.lokasyon.getLokasyon().yAkis == balonLokasyon.getLokasyon().yAkis});
    }
}

// An example for finding closest number but in one dimention
function findIndexClosestNumber(arrayToSearch, compareNumber) {
    'use strict';
    let closest = compareNumber;
    let indexClosest = 0;
  
    arrayToSearch.forEach((currentNumber, index) => {
      let currentDistance =
        Math.abs(compareNumber - currentNumber);
  
      if (currentDistance < closest) {
        indexClosest = index;
        closest = currentDistance;
      }
    });
  
    return indexClosest;
  }