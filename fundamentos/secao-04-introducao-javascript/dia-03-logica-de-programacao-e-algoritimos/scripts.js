// exercício lógica-de-programcação
// Utilize a estrutura de repetição for para escrever dois algoritmos: 
// um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0];
let menorPalavra = array [0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
    console.log('Maior palavra: ' + maiorPalavra);
  }

}

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
    console.log('Menor palavra: ' + menorPalavra);
  }
}

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
// Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, 
// depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = 'tryber';
let reversePalavra = '';
for (let i = 0; i < palavra.length; i += 1){
  reversePalavra += palavra[palavra.length - 1 - i];
}
console.log(reversePalavra);
