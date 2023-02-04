# Assignment

## Chapter 01

### 1. What is Emmet ?

 Emmet is set of plugins for the editor that speeds up the coding.

### 2. What is the difference between a library and a framework ?

* Framework is a set of libraries and a runtime that requires to run the application/libraries

* Library is piece of code that does not run on its own.

### 3. What is CDN and the use of it?

  CDN (Content Delivery Network) is network of servers that are used to distribute the content from an Origin server throught out the world by caching content closer to the end user.

### 4. What is crossorigin in script tag?

 The useragent/browser does not ask for permission for full access to the resource and in case of a cross-origin request, certain limitations will be applied based on the type of element.

* For a script tag, access to the error logging via `window.onerror` will be limited.

### 5. Why is React is known as React?

### 6. What is the React and React DOM ?

* React is a library that is used mainly to create elements, attributes.
* React DOM is mainy used to manipulate or render the DOM tree using the react elements created using React Package.

### 7. What is difference between react.development.js and react.production.js files via CDN?

* `react.development.js` is full version of reactjs script whereas `react.production.js` is minified version of it.

### 8. What is async and defer?

* `async` and defer attributes for script tag allows the execution of script wrt to the HTML parsing execution.
* `async` attribute pauses the execution of HTML parsing while script is running, where as `defer` allows the script to run only after the HTML parsing is completely done.


### 9.What is lifting the state up?
Sometimes the state of multiple components have to be changed together. In this case, remove the state of those two components and move it to the immediate ancestor of those components, and pass it down to them via props. This process is called 'lifting the state' up.
* Ex: According with more than one panel

