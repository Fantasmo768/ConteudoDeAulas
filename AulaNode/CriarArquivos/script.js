const promptSync = require('prompt-sync')();
const fs = require('fs')
const path = require('path')

let nomeArquivo = (promptSync("Digite o nome do arquivo"))
let quantidadeArquivos = parseInt(promptSync("Digite quantos arquivos deseja criar"))
let conteudoArquivos = (promptSync("Digite o conteúdo dos arquivos que deseja criar"))

for (let i = 0; i < quantidadeArquivos; i++) {

    fs.writeFileSync(`${nomeArquivo} ${i}`, conteudoArquivos)
    console.log(`${nomeArquivo} ${i+1} criado`)
}