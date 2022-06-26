// npm - global command, comew with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// sudo apt install nodejs (ubuntu)

// package.json - manifest file (stores important info abput project/package)
// manual approach (create package.jsonin the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);