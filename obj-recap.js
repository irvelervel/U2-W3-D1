console.log('recap oggetti')

// in JS si può definire un oggetto semplicemente utilizzando la cosiddetta "notazione letterale" --> { }
let house = {
  numberOfFloors: 3,
  color: 'lightyellow',
  'garden-sqm': 30,
  families: ['Rossi', 'Bianchi'],
  explode: () => {
    // questo è un metodo
    console.log('BOOM!')
  },
}

console.log(house.color)
console.log(house['garden-sqm']) // 30
house.explode() // explode è una caratteristica propria della casa

console.log(house.__proto__)

let person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  sayHello: function () {
    console.log('Ciao, io mi chiamo ' + this.firstName)
    // console.log(`Ciao, io mi chiamo ${this.firstName}`)
    // con "function" this si binda all'oggetto, mentre con "() =>" this NON si binda all'oggetto e resta Window
  },
}

person.sayHello()

// limitazioni di questo approccio?

let dog = {
  name: 'Fido',
  breed: 'French Bulldog',
}

let dog2 = {
  name: 'Fufy',
  breed: 'Black Labrador',
}

// ne fate altri50
// e inevitabilmente sbagliate di scrivere...

let dog52 = {
  firstName: 'Romy',
  bred: 'Pastore Maremmano',
}

// come evitare questi errori?
// in JS esiste la possibilità di automatizzare la creazione di oggetti in serie
// si può fare tramite l'utilizzo di una particolare funzione, detta FUNZIONE COSTRUTTORE

// proseguiamo su constructor.js
