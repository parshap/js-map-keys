"use strict";

var hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function(obj, map) {
	var result = {};
	for (var key in obj) {
		if (hasOwnProperty.call(obj, key)) {
			result[map(obj[key], key, obj)] = obj[key];
		}
	}
	return result;
};
