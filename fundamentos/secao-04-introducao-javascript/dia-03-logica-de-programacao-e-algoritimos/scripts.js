// exercício lógica-de-programcação
// Utilize a estrutura de repetição for para escrever dois algoritmos: 
// um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra;
let menorPalavra;

for (let i = 0; i < array.length; i++);
    if (array[i].length > maiorPalavra.length){
        maiorPalavra = array[i];
}
for (let i = 0; i < array.length; i++);
    if (array[i].length < menorPalavra.length){
        menorPalavra = array[i];
    }
    console.log(maiorPalavra);
    console.log(menorPalavra);
   
