console.log('JavaScript funguje')

let jmeno = "Alenka"
let vek = 18

let jmena = [
"Alenka", 
"Jája", 
"Pája", 
"Bolek", 
"Lolek",
"Bob",
"Bobek",
"Pat",
"Mat",
"Eliška"
]

console.log(jmena)

//velikost pole, tj. pocet prvku uvnitr
console.log(jmena.length)

// Jak se vytvoří pole a co to je


// Jak přistupujeme k prvkům pole
console.log(jmena[6])

jmena[1] = "Gargamel"

console.log(jmena)

// Práce s polem v cyklu

for (let i = 0; i < 4; i++ ){
    console.log("Ahojda jahoda")
}

// Metody pro práci s polem
// - pridat na konec
// pole.push("")
jmena.push("Šprýmař")
jmena.push("Bručoun")


// - odebrat z konce
// pole.pop("")
let odebraneJmenoZKonce = jmena.pop()
console.log(jmena)


// - pridat na zacatek
//pole.unshift("")
jmena.unshift("Slizoun")
console.log(jmena)


// - odebrat ze zacatku
//pole.shift("")
jmena.shift("Slizoun")
console.log(jmena)

// - vrátit kousek pole od-do
//pole.slice("") s novym let

let novaJmena = jmena.slice(2,8)

console.log(novaJmena)