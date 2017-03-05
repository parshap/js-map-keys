"use strict";

var test = require("tape");
var assert = require("assert");
var map = require("./");

test("should map object", function(t) {
	var obj = map({ foo: 2, bar: 5 }, function(val, key) {
		return key + "baz";
	});
	t.equal(Object.keys(obj).length, 2);
	t.equal(obj.foobaz, 2);
	t.equal(obj.barbaz, 5);
	t.end();
});
