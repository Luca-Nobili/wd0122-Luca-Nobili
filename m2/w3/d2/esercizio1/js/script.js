class persone {
    constructor (nome, eta){
        this.name = nome
        this.age = eta
    }
    calcolo(obj2){
        if (this.age > obj2.age){
            console.log(this.name + ' è più vecchio di ' + obj2.name);
        }
        else if (this.age > obj2.age){
            console.log(this.name + 'è più giovane di ' + obj2.name);
        }
        else if (this.age == obj2.age){
            console.log(this.name + 'e' + obj2.name + 'hanno la stessa età');
        }

    }
}

let p1 = new persone('Massimiliano', 35)
let p2 = new persone('Luca',36)
let p3 = new persone('Marco',19)

p2.calcolo(p1)

