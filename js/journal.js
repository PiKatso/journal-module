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
