// dichiariamo una classe Computer

class Computer {
  constructor(_brand) {
    // accetto nell'inizializzazione del mio nuovo Computer una proprietà chiamata "brand",
    // che utilizzerò come valore per un attributo con lo stesso nome
    // che verrà inserito in ogni Computer
    this.brand = _brand
  }

  showBrand() {
    return 'Ho un computer di marca ' + this.brand
  }

  numberOfPeripherals = 4
}

const macbook = new Computer('Apple')
console.log(macbook.brand) // 'Apple'
console.log(macbook.showBrand()) // 'Ho un computer di marca Apple'

const surface = new Computer('Microsoft')

// in JS (come in tanti altri linguaggi OOP) le classi possono essere ESTESE

// anche ComputerWithModel ha bisogno del concetto di "brand"
// invece che copiare/incollare pezzi dalla classe precedente, la uso come PUNTO DI PARTENZA
class ComputerWithModel extends Computer {
  // per merito dell'extend, ogni ComputerWithModel erediterà tutti i metodi e le proprietà di Computer
  constructor(_brand, _model) {
    // this.brand = _brand --> NO! l'ho già dichiarato in Computer!
    // quello che dovrei fare prima di tutto, è creare un Computer...
    // dovrei invocare il costruttore di Computer con _brand
    // super.constructor(_brand)
    super(_brand) // ho invocato il costruttore della classe da cui sto estendendo!
    // così genero tutte le proprietà/metodi di Computer (ne ho solo una, brand)
    // l'invocazione di super, se estendete da un'altra classe, dev'essere la PRIMA RIGA dentro il vostro constructor
    // ora semplicemente aggiungo le proprietà UNICHE di ComputerWithModel
    this.model = _model
  }

  showModel() {
    return super.showBrand() + ', il modello è ' + this.model
  }

  //   numberOfPeripherals = 5 <-- è anche possibile sovrascrivere proprietà esistenti in Computer
}

const macbookPro2015 = new ComputerWithModel('Apple', 'Macbook 2015')
// l'inizializzazione di un nuovo ComputerWithModel, estendendo da Computer, richiede anche tutti i parametri
// richiesti dal constructor di Computer

// ogni oggetto di tipo Computer possiede:
// - brand
// - numberOfPeripherals
// - showBrand()

// ogni oggetto di tipo ComputerWithModel possiede:
// - brand
// - numberOfPeripherals
// - showBrand()
// - model
// - showModel()

console.log(macbookPro2015.numberOfPeripherals)
