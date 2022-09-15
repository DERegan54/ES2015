/**ES5 Global Constants
Var PI = 3.14;
PI = 42;

Using var to define PI is not a good idea, since variables defined with var can be both redeclared and reassigned.  PI, especially, should never be redeclared because of its importance in mathematics and geometry, and redeclaring it accidentally could be disastrous.  

ES2015 Global Constants

This declaration of PI is much safer:
const PI = 3.14;


/**Quiz

What is the difference between var and let?

The difference lies in the fact that var can be both redeclared AND reassigned.  On the other hand, let cannot be redeclared, but it can be reassigned.  Var is also able to be accessed in lines of code that come before it is actually declared, whereas, let can only be accessed within the code block where it is declared.

What is the difference between var and const?

The const keyword makes the variable declared with it a CONSTANT, meaning that it cannot be reassigned OR redeclared.  As mentioned in the above question, var is able to be both redeclared AND reassigned, so this flexibility is not idea for variables that you do not want to change at all.

What is the difference between let and const?

Again, const creates a CONSTANT variable that cannot be reassigned or redeclared.  With let, you can reassign it if needed, but it still cannot be redeclared.  

What is hoisting? 

Hoisting is when a variable or a function is accessed in lines above where it is declared in the code.  
**/