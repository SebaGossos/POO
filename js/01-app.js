class Cliente {
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    showInfo() {
        return `Cliente: ${ this.nombre }, tu saldo es de ${ this.saldo }`
    }

    static welcome() {
        return `welocome to exchange`;
    }
}

const juan = new Cliente('juan',300);
console.log( juan );
console.log( juan.showInfo() );
console.log( Cliente.welcome());


// --------------------------

const Cliente2 = class {
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    showInfo() {
        return `Cliente: ${ this.nombre }, tu saldo es de ${ this.saldo }`
    }
}

const juan2 = new Cliente2('juan',300);
console.log( juan2 );
console.log( juan2.showInfo() );