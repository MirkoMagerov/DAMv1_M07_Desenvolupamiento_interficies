function init() {
    let propertiesNeeded = ["nombre", "categoria", "pulgadas", "unidades", "precio", "resolucion"];

    let tvSamsung = new Object();

    tvSamsung.nombre = "TV Samsung 42";
    tvSamsung.categoria = "Televisores";
    tvSamsung.unidades = 4;
    tvSamsung.precio = 345.95;

    tvSamsung.getImporte = function() {
        return this.unidades * this.precio;
    }

    for (let p in propertiesNeeded) {
        if (!(propertiesNeeded[p] in tvSamsung)) {
            tvSamsung[propertiesNeeded[p]] = undefined;
        }
    }

    for (let p in tvSamsung) {
        if (tvSamsung[p] === undefined) {
            tvSamsung[p] = prompt(`Introduce el valor de la propiedad ${p}.`);
        }
    }

    let string = JSON.stringify(tvSamsung);

    let object = JSON.parse(string);

    console.log(string);
    console.log(object);
}