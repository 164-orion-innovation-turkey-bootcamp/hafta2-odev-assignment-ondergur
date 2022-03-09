// import * as readline from 'readline';
// import { stdin as input, stdout as output } from 'process';

class Ingredient {
  name: string;
  count: number;

  constructor(name: string, count: number) {
    this.name = name;
    this.count = count
  }
}


let marul = new Ingredient("marul", 5)
let tursu = new Ingredient("tursu", 5)
let paketSos = new Ingredient("paketSos", 5)
let sogan = new Ingredient("sogan", 5)
let kofte = new Ingredient("kofte", 5)
let tavuk = new Ingredient("tavuk", 5)
let domates = new Ingredient("domates", 5)
let ekmek = new Ingredient("ekmek", 5)
let patates = new Ingredient("patates", 5)
let cola = new Ingredient("cola", 5)

let ingredients = [marul, tursu, paketSos, sogan, kofte, tavuk, domates, ekmek, patates, cola]

let step = (time: number, text: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(text))
    }, time)
  })
}

let checkStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let ing of ingredients) {
        if (ing.count > 0) {
          continue
        } else {
          reject(`Stokta yeterli ${ing.name} yok.`)
        }
      }
      resolve(console.log("Stok kontrolü yapıldı"))
    }, 3000)
  })
}

var readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const chooseMeat = () => {
  return new Promise<void>((resolve, reject) => {
    rl.question("Köfte(K) mi Tavuk(T) mu tercih edersiniz?",async (answer) => {
      if (answer === "K") {
        kofte.count--
        await chooseCookingDegree()
        console.log("buradayim 4")
      } else if (answer === "T") {
        await step(3000, "Tavuk pişir")
      } else {
        reject("Yanlış bir seçim yaptınız")
      }
      resolve()
    })
  })
}

const chooseCookingDegree = () => {
  return new Promise<void>((resolve, reject) => {
    rl.question("Pişirme derecesi tercihiniz nedir? \n(1) Az Pişmiş \n (2)Orta Pişmiş \n (3)İyi Pişmiş", (answer) => {
      switch (answer) {
        case "1":
          step(2000, "Az pişmiş köfte hazır")
          resolve()
          break;
        case "2":
          step(3000, "Orta pişmiş köfte hazır")
          resolve()
          break;
        case "3":
          step(4000, "Çok pişmiş köfte hazır")
          resolve()
        default:
          reject()
          break;
      }
    })
  })
}

const madeHamburger = () => {
  marul.count--
  domates.count--
  tursu.count--
  sogan.count--
}

const prepareDrink = () => {
  cola.count--
  step(2000, "İçecek hazır")
}

const prepareSauces = async () => {
  paketSos.count--
  await step(1000, "Soslar hazır")
}

const combinedSteps = async () => {
  madeHamburger()
  prepareDrink()
  await step (5000, "Patates kızart")
}

async function main() {
  try {
    await step(1000, "Sipariş alındı.")
    await checkStock()
    await chooseMeat()
    await combinedSteps()
    await prepareSauces()
    await step(1000, "Servis edildi. Afiyet olsun")
    
  } catch (error) {
    console.log(error, "Error yazdır")
  } finally {
    rl.close()
  }
  
}

main()