const promptSync = require('prompt-sync')();
const fs = require('fs')
const path = require('path')

let nomeArquivo = "Informações.txt"
let nomes = []; let alturas = []; let pesos = []
let quantidadeInfo = 0;

while (true) {
    
    let nome = promptSync(`Insira o nome da ${quantidadeInfo+1}° pessoa `)
    if (nome.toLowerCase() == "parar") {
        break
    }
    let peso = promptSync(`Insira o peso da ${quantidadeInfo+1}° pessoa `)
    let altura = promptSync(`Insira a altura da ${quantidadeInfo+1}° pessoa `)

    
    nomes[quantidadeInfo] = nome
    pesos[quantidadeInfo] = peso
    alturas[quantidadeInfo] = altura
    quantidadeInfo++

    
}

for (let i = 0; i < quantidadeInfo; i++) {
    fs.appendFileSync(nomeArquivo, `${nomes[i]} `, "utf-8")
    fs.appendFileSync(nomeArquivo, `${pesos[i]} `, "utf-8")
    fs.appendFileSync(nomeArquivo, `${alturas[i]}\n`, "utf-8")
}
