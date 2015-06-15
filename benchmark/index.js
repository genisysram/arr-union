'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: false,
  fixtures: 'fixtures/*.js',
  add: 'code/{array-union,current,while-for,while-while}.js',
  cwd: __dirname
});

suite.run();
