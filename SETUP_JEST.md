# Setup Jest for Unit and Integration testing

## Configure Jest
 Initially we will have to install and configure jest for our app.
 * npm install --save-dev @testing-library/react
 * npm install -D jest
 * npm install -D jest-environment-jsdom
 * $ npx jest --init

## Configure Jest with Babel
 * $ npm install --save-dev babel-jest @babel/core @babel/preset-env
 * Add `"presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]` in .babelrc file
 * Now write your test cases
 * $ npm run jest
 * Install another package for JSX in our test cases:` $ npm i -D @babel/preset-react` and add it to the `.babelrc` file
