// Generated by CoffeeScript 1.6.3
(function() {
  var chai, expect, render;

  chai = require('chai');

  expect = chai.expect;

  require('./helpers/chai-compile');

  render = require('../src/main');

  describe('compile', function() {
    var fs, setupFixtureTests;
    fs = require('fs');
    setupFixtureTests = function(pretty) {
      var fixtures, fixturesDir, inputFileName, inputs, outputFileName, suffix, _i, _len, _results;
      fixturesDir = 'test/fixtures/';
      fixtures = fs.readdirSync(fixturesDir);
      inputs = fixtures.filter(function(fixture) {
        return /\.jade$/.test(fixture);
      });
      _results = [];
      for (_i = 0, _len = inputs.length; _i < _len; _i++) {
        inputFileName = inputs[_i];
        if (pretty) {
          suffix = '.pretty.js';
        } else {
          suffix = '.js';
        }
        outputFileName = inputFileName + suffix;
        _results.push((function(inputFileName, outputFileName) {
          var markup, output, setupError;
          try {
            markup = String(fs.readFileSync(fixturesDir + inputFileName));
            output = String(fs.readFileSync(fixturesDir + outputFileName));
            return it('compiles ' + inputFileName + ' to ' + outputFileName, function() {
              var options;
              options = {
                pretty: pretty
              };
              return expect(render).to.transform(markup, options).into(output);
            });
          } catch (_error) {
            setupError = _error;
            return it('failed to setup fixture test for file pair ' + inputFileName + '→' + outputFileName, function() {
              return expect(function() {
                throw setupError;
              }).not.to["throw"]();
            });
          }
        })(inputFileName, outputFileName));
      }
      return _results;
    };
    setupFixtureTests(false);
    setupFixtureTests(true);
    it('should not compile multiple root nodes', function() {
      return expect(render).transform('p\np\n').to["throw"]('Component may have no more than one root node');
    });
    return it('should not compile doctype', function() {
      return expect(render).transform('doctype html').to["throw"]('Component may not have doctype tag');
    });
  });

}).call(this);
