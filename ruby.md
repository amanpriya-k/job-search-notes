In Ruby, you’d define a class to represent entities. With classes, you’ll typically want to create a number of instances of each. The word object is used interchangeably with class instance.

These objects are created by calling a constructor, a special method associated with a class. The standard constructor is called new.

song1 = Song.new("Ruby Tuesday")
song2 = Song.new("Enveloped in Python")
and so on
These instances are both derived from the same class, but they have unique characteristics:

Every object has a unique object identifier (abbreviated as object ID).
You can define instance variables, variables with values that are unique to each instance.
Within each class, you can define instance methods. These instance methods have access to the object’s instance variables and hence to the object’s state.

Methods are invoked by sending a message to an object. The message contains the method’s name, along with any parameters the method may need. When an object receives a message, it looks into its own class for a corresponding method (and execute it if it exists).

It’s worth noting here a major difference between Ruby and most other languages. For example, Java, you’d find the absolute value of some number by calling a separate function and passing in that number, like:

num = Math.abs(num) 

# scripting

Ruby is sometimes called a scripting language. The term "scripting language" is often bandied about, but I have never seen or heard anybody describe a precise technical distinction between scripting languages and other languages. (Indeed, Dave Thomas and Andy Hunt, authors of the first major English-language Ruby textbook, seem to agree that it's not a very useful term.)

The thing that seems to lead people to call a language a "scripting language" is the environment in which the major implementation(s) of that language run. Generally, a "scripting language" is one that

runs inside some larger domain-specific environment
contains convenient standard library objects/functions for interacting with features of that environment