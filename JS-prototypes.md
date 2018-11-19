# Javascript Prototypes

JavaScript has had prototypal inheritance from the beginning. It was one of the core features of the language.

## Prototype Property

As we know already, new F() creates a new object.

When a new object is created with new F(), the object’s [[Prototype]] is set to F.prototype.

In other words, if F has a prototype property with a value of the object type, then new operator uses it to set [[Prototype]] for the new object.

Please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.

Here’s the example:

```javascript
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

## Default Prototype

Every function has the "prototype" property even if we don’t supply it.

The default "prototype" is an object with the only property constructor that points back to the function itself.

Like this:

```javascript
function Rabbit() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```
