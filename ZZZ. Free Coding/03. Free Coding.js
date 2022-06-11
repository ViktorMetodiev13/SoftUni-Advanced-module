function print() {
    console.log(`${this.name} is printing a page`);
}

function scan() {
    console.log(`${this.name} is scanning a page`);
}

const printer = {
    name: 'ACME Printer',
    print
};
printer.print();
const scanner = {
    name: 'Initech Scanner',
    scan
};
scanner.scan();
const copier = {
    name: 'ComTron Copier',
    print, 
    scan
};
copier.scan();