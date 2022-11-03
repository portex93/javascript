let producto = parseInt(prompt("que producto le gustaria comprar? : 1.libreta - 2.boligrafo - 3.lapiz - 4.goma"))
let deseaSeguirComprando = true
let totalCompra = 0
let decision

while (deseaSeguirComprando === true){

    if (producto === 1) {
        totalCompra = totalCompra + 450
    } else if (producto === 2) {
        totalCompra = totalCompra + 120
    } else if (producto === 3) {
        totalCompra = totalCompra + 70
    } else if (producto === 4) {
        totalCompra = totalCompra + 60
    }


    decision = parseInt (prompt("quiere seguir comprando? 1.Si - 2.No"))
    if (decision === 1) {
    producto = parseInt(prompt("que producto le gustaria comprar? : 1.libreta - 2.boligrafo - 3.lapiz - 4.goma"))
    }
    else {
        deseaSeguirComprando = false
    }
}

const totalCompraConDescuento = descuento (totalCompra)
alert ("Su total es " + totalCompraConDescuento )

function descuento(valor){
    let descuento = 0
    if (valor<=700) {
        descuento = 10
    }

    let valorDescuento = valor * (descuento/100)
    let valorFinal = valor - valorDescuento
    return valorFinal
    
}


