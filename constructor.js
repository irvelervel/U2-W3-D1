console.log('la funzione costructor')

// la funzione constructor permette la facile creazione in serie di oggetti dotati tutti delle stesse caratteristiche

let person1 = {
  firstName: 'Mario',
  lastName: 'Rossi',
  address: 'Via Roma 1',
  email: 'mario.rossi@gmail.com',
  showCompleteName: function () {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  },
}

// se mi trovassi a dover "generalizzare" questa struttura al fine di creare altri oggetti dotati della stessa struttura
// invece di copiare/incollare o riscrivere la struttura a mano ogni volta posso creare una funzione COSTRUTTORE
// al fine di riutilizzare una struttura esistente (D R Y)

const Person = function () {
  // questa è una funzione COSTRUTTORE
  // per convenzione la si dichiara in PascalCase (con l'iniziale maiuscola)
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.email = ''
  this.showCompleteName = function () {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  }
}

const marioBros = new Person()
console.log('MARIOBROS', marioBros)
// abbiamo creato un guscio con firstName, lastName, email e address ma È VUOTO!
marioBros.firstName = 'Mario'
marioBros.lastName = 'Bros'
marioBros.address = 'Via Milano 2'
marioBros.email = 'mario.bros@gmail.com'

console.log(marioBros.showCompleteName())

// funziona! però questo approccio ci obbliga a dichiarare la funzione costruttore SENZA i valori
// e dopo dobbiamo aggiungerli a mano ad ogni oggetto di tipo Person

const luigiBros = new Person()
luigiBros.firstName = 'Luigi'
luigiBros.lastName = 'Bros'
luigiBros.address = 'Via Firenze 3'
luigiBros.email = 'luigi.bros@gmail.com'

// come miglioriamo la nostra funzione costruttore?
// come possiamo creare un oggetto con GIÀ i valori al loro posto?

// inseriamo nella nostra funzione costruttore dei PARAMETRI

// creiamo ora una funzione costrutture più "furba", che accetta dei parametri e li assegna come valori delle proprietà
const NamedPerson = function (_firstName, _lastName, _address, _email) {
  this.firstName = _firstName
  this.lastName = _lastName
  this.address = _address
  this.email = _email
  this.showCompleteName = function () {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  }
}

const princessPeach = new NamedPerson(
  'Peach',
  'Toadstool',
  'Mushroom Road 1',
  'princess.peach@gmail.com'
)
console.log('PRINCESS PEACH', princessPeach)
console.log(princessPeach.showCompleteName())

const bowser = new NamedPerson(
  'Bowser',
  'Koopa',
  'Hell Road 5',
  'bowser@gmail.com'
)

// questo è il concetto fondamentale :)
// poi, nel corso delle evoluzioni di JS, sempre al fine di attrarre nuovi sviluppatori che magari
// erano abituati ad altri linguaggi più strettamente orientati agli oggetti, è stata anche in JS
// introdotta una nuova keywork: "class"
// "class" genera una funzione costruttore
// andiamo su class.js
