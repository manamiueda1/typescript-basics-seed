// arrow function vs implicit return

// const pizzas = [{ name: 'pepperoni', toppings: ['pepperoni'] }];

// const mappedPizzas = pizzas.map((pizza, index) => {
//   return pizza.name.toUpperCase();
// });

// console.log(mappedPizzas)

// the arrow function inside getName ignores the scope -> it's not binding the 'this' value
// const pizza: any = {
//   name: 'blazing inferno',
//   getName: function () {
//     console.log(this.name)
//   }
// }

// console.log(pizza.getName())

// const coupon: string = 'PIZZA25'

// function normalizeCoupon(code: string): string {
//   return code.toUpperCase()
// }

// const couponMessage: string = `final coupon is ${normalizeCoupon(coupon)}`
// console.log(couponMessage)
// console.log(normalizeCoupon(coupon))

// class example


abstract class Sizes {
  constructor(public sizes: string[]) { }
  
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

class Pizza extends Sizes{
  
  toppings: string[] = [];

  constructor(public name: string, public sizes: string[]) {
    super(sizes)
  }
  
  addTopping(topping: string) {
    this.toppings.push(topping)
    console.log(this.name, 'pizza name')
  }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium'])
pizza.addTopping('cheese')
console.log(pizza.availableSizes)
console.log(pizza)