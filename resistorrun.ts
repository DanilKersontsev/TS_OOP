class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getamps(w: number, v:number): number {
        return  w / v
    }
    getOhms(v: number, w:number): number{
        return v / this.getamps(w, v);
    }
    getwater(w: number, ml:number): number{
        return Math.floor(20 + (60 /(4.19 * (ml / w))))
    }
}
// Mitu vatti soojust eraldub takistist?
let r1 = new Resistor(2.5);
console.log(r1.getPower(5));

// Mitu amprit voolu läbib takistit?
console.log(r1.getamps(6,4));
// Mitu oomi on eelneva takisti takistus?
console.log(r1.getOhms(4,6))
//Mitme kraadi peale tõuseb vee temperatuur 20 kraadi Celsiuse pealt ühe minutiga
console.log(r1.getwater(1000, 1000))
// Mitu amprit voolu läbib eelnimetatud veekeedukannu, kui võrgupinge on 220 volti?
console.log(r1.getamps(1000, 220))
// Mitu oomi on selle veekeedukannu takistus?
console.log(r1.getOhms(220, 1000))