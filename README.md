# EXAMPLE: Render JSON information as HTML

I built this as a simple example on how one could go about rendering JSON data in a simple HTML format. It uses ES6 and functional-style programming to display data in a JSON file. See the notes below for further explanation.

## ES6 Arrow Functions Explained

In JavaScript, it is common for one to manipulate array data by using the `array.map()` function. Below shows how one might use the old ES2015 lambda function syntax:

```js
array.forEach(function (item) {
  return item.foo;
})
```

The following is functionally equivalent to the ES2015, but uses the ES6 Arrow Function syntax. Note the terse but easier to read nature of the syntax.

```js
array.forEach(item => item.foo);
```

## ES6 Template Literals

In ES2015, concatenating data into a string was a little verbose:

```js
var foo = "bar";
var message = 'The variable "foo" has a value of "' + foo +  '".';
```

ES6 has an easier to use syntax by using <code>`</code> chars to create template literals.

```js
let foo = "bar";
let message = `The variable "foo" has a value of "${foo}".`;
```

We can use this to easily interpolate JSON data into HTML (such as arrays into the rows of a table).