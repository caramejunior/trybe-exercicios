    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa = {
        nome: 'Luna',
        idade: 19
      } // Altere essa estrutura para corrigir o erro.
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);




        // Transforme a função numeroAleatorio em uma arrow function;
        const numeroAleatorio = () => Math.random() 

          console.log(numeroAleatorio());




        // Transforme a função hello em uma arrow function;
        const hello = (nome) => `Olá, ${nome}`
          
          let nome = 'Ivan';
          console.log(hello(nome));




        // Transforme a função nomeCompleto em uma arrow function;
        const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

           nome = 'Ivan';
           sobrenome = 'Pires';
          console.log(nomeCompleto(nome, sobrenome));




        // Altere a expressão if/else utilizando ternary operator;
        let speed = 90;
        const speedCar = (speed) => (
            speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
        );

        console.log(speedCar(speed));




        // Crie uma função que ligue e desligue um motor de um carro.
        // Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
        // Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
        // Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
        // Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
        let status = 'desligado';

        const ligarDesligar = () => (
            status === 'ligado' ? status = 'ligado' : status = 'desligado'
            )
            
        console.log(`O motor está ${[ligarDesligar()]}`);
        console.log(`O motor está ${[ligarDesligar()]}`);




        


    