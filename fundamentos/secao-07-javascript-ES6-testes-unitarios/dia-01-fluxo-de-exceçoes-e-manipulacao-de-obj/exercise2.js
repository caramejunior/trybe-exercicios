const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
    console.log (`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, Numero ${order.address.number}, AP ${order.address.apartment}`);
};

customerInfo(order);

const orderModifier = (order) => {
    const newName = order.name = 'Luiz Silva';
    const newValue = order.payment.total = '50';
    const pizzas = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;

    console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0], pizzas[1]} e ${drink} é R$ ${newValue},00`);
};

orderModifier(order);
