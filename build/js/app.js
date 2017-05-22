(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function() {
  length = this.body.length;
  return length;
};

Journal.prototype.vowelCount = function() {
  body = this.body;
  vowels = body.match(/[aeiou]/ig);
  return vowels.length;
};

Journal.prototype.constCount = function() {
  body = this.body;
  consts = body.match(/[^aeiou]/ig);
  return consts.length;
};

Journal.prototype.teaser = function() {
  body = this.body;
  firstSentence = body.split('.')[0];
  splitSentence = firstSentence.split(" ");
  tease = [];
  if (splitSentence.length > 8) {
    for(i = 0; i < 8; i++) {
      tease.push(splitSentence[i]);
    }
    return tease.join("");
  }
  else {
    return firstSentence;
  }
};

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(function(){
  $('#journal-form').submit(function(e) {
    e.preventDefault();
    title = $("#title").val();
    body = $("#body").val();

    entry = new Journal(title, body);
    $("#output").append(`<h3>${entry.title}</h3><p>${entry.body}</p><p>${entry.teaser()}</p><hr>`);
    $("#title").val("");
    $("#body").val("");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
