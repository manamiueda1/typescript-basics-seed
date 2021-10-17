console.log('Ahoy TypeScript!');

// arrow function vs implicit return

// const pizzas = [{ name: 'pepperoni', toppings: ['pepperoni'] }];

// const mappedPizzas = pizzas.map((pizza, index) => {
//   return pizza.name.toUpperCase();
// });

// console.log(mappedPizzas)

// the arrow function inside getName ignores the scope -> it's not binding the 'this' value
const pizza: any = {
  name: 'blazing inferno',
  getName: function () {
    console.log(this.name)
  }
}

console.log(pizza.getName())