// console.log("Seja bem-vindo ao criador de arquivos");

const promptSync = require('prompt-sync')();
const fs = require('fs');
const path = require('path')

// for (let i = 1; i <= 3; i++) {
//   console.log(`\nArquivo ${i}:`);

//   // solicita o nome pro usuario escrever
//   const nomeArquivo = promptSync("Digite o nome do arquivo (sem .txt): ");
  
//   // solicita o conteudo pro usuario escrever
//   const conteudo = promptSync("Digite o conteúdo que deseja inserir: ");
  
//   // Cria o arquivo com o conteúdo
//   fs.writeFileSync(`${nomeArquivo}.txt`, conteudo, "utf-8");

//   console.log(`Arquivo "${nomeArquivo}.txt" criado com sucesso!`);
// }

// console.log("\nTodos os arquivos foram criados.")


//console.log(__dirname);

// //C:\User\DES-I1HS\Desktop\R9\Meus Aquivos
// const pasta = path.join(__dirname, "Meus Arquivos"); //esse comando cria a pasta Meus Arquivos

// fs.mkdirSync(pasta, {recursive:true}); //Se uma pasta está faltando no meio do caminho, por exemplo se no caminho do C:\User\DES-I1HS\Desktop\R9\Meus Arquivos, se tiver faltando alguma pasta ele vai criar essa pasta, assim como se pasta já existir ele vai simplesmente ignorar

// const estruturaDePastas=path.join(__dirname, "Meus Arquivos", "Arquivos diversos", "Imagens")

// fs.mkdirSync (estruturaDePastas, {recursive:true});

