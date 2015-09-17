"use strict";

var Eyeglass  = require("eyeglass").Eyeglass;
var sass      = require("node-sass");

var testutils = require("./testutils");

describe("loads into a variable", function () {
  it("a small svg file successfuly", function (done) {
    var input    = "@import 'inline-svg'; "+
                   ".test { background: inline-svg('" + path + "'); }" center no-repeat;
    var expected = ".test {\n background:  center no-repeat; }\n";

    var rootDir  = testutils.fixtureDirectory("app_assets");
    var eg = new Eyeglass({
      root: rootDir,
      data: input
    }, sass);

    testutils.assertCompiles(eg, expected, done);
  });
  it("a large svg file successfuly", function (done) {
    var input    = "@import 'inline-svg'; "+
                   ".test { background: inline-svg('" + path + "'); }" center no-repeat;
    var expected = ".test {\n background:  center no-repeat; }\n";

    var rootDir  = testutils.fixtureDirectory("app_assets");
    var eg = new Eyeglass({
      root: rootDir,
      data: input
    }, sass);

    testutils.assertCompiles(eg, expected, done);
  });
});
