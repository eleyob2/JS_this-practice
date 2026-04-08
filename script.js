// ============================================================
//  The "this" Keyword — Practice Tasks
//  Web Development
// ============================================================
//
//  DIRECTIONS:
//    Complete each task below by filling in the TODO sections.
//    Use the "this" keyword to access or set properties and
//    call other methods on the same object.
//
//    Open index.html and click "Run Tests" to check your work.
//    A task turns green when all of its tests pass.
//
//  REMINDER — What is "this"?
//    Inside an object method or class, "this" refers to the
//    object that owns the function being called right now.
//    Use it like: this.propertyName  or  this.methodName()
// ============================================================


// ============================================================
//  TASK 1 — Object Method: Basic Property Access
// ============================================================
//  The "person" object already has name and age properties.
//  Complete the greet() method so it uses "this" to build
//  and return an introduction string.
//
//  Expected output of person.greet():
//    "Hi, I'm Alex and I'm 17 years old."
// ============================================================

const person = {
  name: "Alex",
  age: 17,

  greet(name, age){
    this.name = name;
    this.age = age;
    // TODO: Use this.name and this.age to build a return string.
    //       The format should be: "Hi, I'm [name] and I'm [age] years old."
    //       Do NOT hard-code "Alex" or "17" — use this!
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;

  }
};

// Uncomment to test in the console:
// console.log(person.greet());




// ============================================================
//  TASK 2 — Object Method: Calling Other Methods with this
// ============================================================
//  The "counter" object tracks a number called "count".
//  Complete the four methods so they all use "this.count"
//  to read and update the shared value.
// ============================================================

const counter = {
  count: 0,

  increment(amount) {
    // TODO: Add "amount" to this.count

  },

  decrement(amount) {
    // TODO: Subtract "amount" from this.count

  },

  reset() {
    // TODO: Set this.count back to 0

  },

  getCount() {
    // TODO: Return the current value of this.count

  }
};

// Uncomment to test in the console:
// counter.increment(5);
// counter.increment(3);
// counter.decrement(2);
// console.log(counter.getCount()); // 6
// counter.reset();
// console.log(counter.getCount()); // 0




// ============================================================
//  TASK 3 — Constructor Function: Building with this
// ============================================================
//  Before classes, JavaScript used constructor functions with
//  "new" to create objects. "this" inside a constructor
//  refers to the new object being built.
//
//  Complete the Animal constructor so it saves the name and
//  sound arguments as properties on "this".
//  Then complete the speak() method on the prototype.
// ============================================================

function Animal(name, sound) {
  // TODO: Use "this" to store name and sound as properties.
  //       this._______ = _______
  //       this._______ = _______

}

Animal.prototype.speak = function() {
  // TODO: Return a string in this format:
  //       "Rex says woof!"
  //       Use this.name and this.sound — don't hard-code values.

};

// Uncomment to test in the console:
// const dog = new Animal("Rex", "woof");
// const cat = new Animal("Luna", "meow");
// console.log(dog.speak()); // "Rex says woof!"
// console.log(cat.speak()); // "Luna says meow!"




// ============================================================
//  TASK 4 — Class: Properties, Methods, and this
// ============================================================
//  Complete the Rectangle class.
//  - The constructor receives width and height and stores them.
//  - area() and perimeter() calculate and return their values.
//  - describe() must CALL this.area() and this.perimeter()
//    using "this" — do not recalculate manually inside it.
// ============================================================

class Rectangle {
  constructor(width, height) {
    // TODO: Store width and height on "this"

  }

  area() {
    // TODO: Return width × height using this.width and this.height

  }

  perimeter() {
    // TODO: Return 2 × (width + height) using this.width and this.height

  }

  describe() {
    // TODO: Return a string that includes both the area and perimeter.
    //       Call this.area() and this.perimeter() — use "this"!
    //
    //       Example: "This rectangle has an area of 24 and a perimeter of 20."

  }
}

// Uncomment to test in the console:
// const r = new Rectangle(6, 4);
// console.log(r.area());       // 24
// console.log(r.perimeter());  // 20
// console.log(r.describe());   // "This rectangle has an area of 24 and a perimeter of 20."




// ============================================================
//  TASK 5 — Class: Method Chaining with this
// ============================================================
//  When a method returns "this", you can chain calls together:
//    cart.addItem("Pen", 2.00).addItem("Ruler", 3.00).getTotal()
//
//  Complete the ShoppingCart class:
//    - addItem(name, price)    → push item, return this
//    - applyDiscount(percent)  → store discount, return this
//    - getTotal()              → sum prices, apply discount, return number
//
//  Discount example: 10% off $5.50 = $4.95
//    Total × (1 - discount / 100)
// ============================================================

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price) {
    // TODO: Push an object { name, price } into this.items
    // TODO: Return this  ← this is what enables chaining!

  }

  applyDiscount(percent) {
    // TODO: Store percent in this.discount
    // TODO: Return this  ← don't forget!

  }

  getTotal() {
    // TODO: Loop through this.items and add up all the prices.
    //       Then apply this.discount as a percentage reduction.
    //       Return the final total as a number.
    //
    //       Formula: total × (1 - this.discount / 100)

  }
}

// Uncomment to test in the console:
// const cart = new ShoppingCart();
// cart.addItem("Pencil", 1.50);
// cart.addItem("Notebook", 4.00);
// console.log(cart.getTotal());         // 5.5

// cart.applyDiscount(10);
// console.log(cart.getTotal());         // 4.95

// Chaining version:
// const cart2 = new ShoppingCart();
// const total = cart2
//   .addItem("Pen", 2.00)
//   .addItem("Ruler", 3.00)
//   .applyDiscount(20)
//   .getTotal();
// console.log(total);                   // 4.0
