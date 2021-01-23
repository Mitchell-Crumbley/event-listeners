// CALLBACK

function firstString (sentence) {
  return `This is a ${sentence}!`;
}

function secondString (sentence) {
  return `Also a ${sentence}!`;
}

function callbackSentence (sentence, cb) {
  return cb(sentence);
}

console.log(callbackSentence('sentence', firstString));
console.log(callbackSentence('sentence', secondString));
