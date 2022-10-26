const producto = parseInt(prompt("que producto le gustaria comprar? : 1.libreta - 2.boligrafo - 3.lapiz - 4.goma"))
let deseaSeguirComprando = true
let totalCompra = 0
let decision

class NuevoProductos{
    constructor (id,nombre,precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const libreta = new NuevoProductos (1,"libreta",450)
const boligrafo = new NuevoProductos (2,"boligrafo",120)
const lapiz =  new NuevoProductos (3,"lapiz",80)
const goma = new NuevoProductos (4,"goma",50)

while (deseaSeguirComprando === true){
    if (producto === libreta.id) {
        totalCompra = totalCompra + libreta.precio
    } else if (producto === boligrafo.id) {
        totalCompra = totalCompra + boligrafo.precio
    } else if (producto === lapiz.id) {
        totalCompra = totalCompra + lapiz.precio
    } else if (producto === goma.id) {
        totalCompra = totalCompra + goma.precio
    }
}

decision = parseInt(prompt("quiere seguir comprando? 1.Si - 2.No")) {
    if (decision === 1) {
        const producto = parseInt(prompt("que producto le gustaria comprar? : 1.libreta - 2.boligrafo - 3.lapiz - 4.goma"))
    } else { deseaSeguirComprando === false}
}
