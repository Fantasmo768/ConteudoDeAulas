const promptSync = require('prompt-sync')();
const fs = require('fs')
const path = require('path')

let nomeArquivo = "Informações.txt"
let nomes = []; let alturas = []; let pesos = []

while (isNaN(quantidadeInfo) || quantidadeInfo <= 0) {
    quantidadeInfo = parseInt(promptSync("Insira um valor válido"))
}

for (let i = 0; i < quantidadeInfo; i++) {
    nomes [i] = promptSync(`Insira o nome da ${i}° pessoa`)
    pesos [i] = promptSync(`Insira o peso da ${i}° pessoa`)
    alturas [i] = promptSync(`Insira a altura da ${i}° pessoa`)
}

for (let i = 0; i < quantidadeInfo; i++) {
    fs.appendFileSync(nomeArquivo, `${nomes[i]}`, "utf-8")
    fs.appendFileSync(nomeArquivo, `${pesos[i]}`, "utf-8")
    fs.appendFileSync(nomeArquivo, `${alturas[i]}`, "utf-8")
}
