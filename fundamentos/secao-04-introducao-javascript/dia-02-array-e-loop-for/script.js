let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 11, 77];
let resultado = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 !== 0){
        resultado++;
    }
}
if (resultado === 0){
    console.log("Nenhum valor ímpar encontrado");
}
else {
    console.log(resultado);
}