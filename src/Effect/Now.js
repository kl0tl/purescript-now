"use strict";

export var now = function () {
  return Date.now();
};

export var getTimezoneOffset = function () {
  var n = new Date(Date.now());
  return n.getTimezoneOffset();
};
