// le classi in JS sono un metodo ALTERNATIVO per creare delle funzioni costruttore
// lo scopo è sempre il medesimo: creare in modo robusto molti oggetti dello stesso tipo in serie
// è semplicemente un modo diverso di scrivere una funzione costruttore

class NamedPerson {
  constructor(_firstName, _lastName, _address, _email) {
    // uso il metodo constructor quando devo assegnare dei valori dinamici a determinate proprietà
    this.firstName = _firstName
    this.lastName = _lastName
    this.address = _address
    this.email = _email
  }

  // questa proprietà ha un valore unico per tutti gli oggetti NamedPerson
  numberOfLegs = 2

  sayHello() {
    return 'Ciao!' + this.firstName
  }
}

// l'utilizzo della classe per la creazione di oggetti è IDENTICO all'utilizzo di una normale funzione costruttore
const stefano = new NamedPerson(
  'Stefano',
  'Casasola',
  'Via Roma 1',
  'stefano@gmail.com'
)
console.log(stefano)
console.log(stefano.sayHello())

const orlando = new NamedPerson(
  'Orlando',
  'Bloom',
  'NY street 4',
  'orlando@lotr.com'
)
