const lista = []
class novedad {
    constructor (id,name,price,stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

const libreta = new novedad (1, "libreta", 450, 20)
lista.push (libreta)
const boligrafo = new novedad (2,"boligrafo", 120,40)
lista.push (boligrafo)
const lapiz = new novedad (3, "lapiz", 70 , 20)
lista.push (lapiz)
const goma = new novedad (4,"goma", 60,10)
lista.push (goma)


console.log (lista)