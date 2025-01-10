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

// inheritance

class Company extends Cliente {
    constructor( nombre, saldo, phone, category ) {
        super( nombre, saldo );
        this.phone = phone;
        this.category = category;
    }

    static welcome() { // rewrite method
        return `welocome to companies ATM`;
    }
}

const juan = new Cliente('juan',300);
const empresa = new Company('Codigo con juan', 500, 3423423, 'Online Learning');
console.log( empresa );
console.log( empresa.showInfo() );

console.log( Cliente.welcome() )
console.log( Company.welcome() )