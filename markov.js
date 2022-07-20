/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = new Map();
    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextword = this.words[i+1] || null;

      if (chain.has(word)) chain.get(word).push(nextword);
      else chain.set(word, [nextword]);
    }
    this.chain = chain;
  }

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(this.chain.keys());
    let key = MarkovMachine.choice(keys);
    let output = []

    while (output.length < numWords && key !== null) {
      output.push(key);
      key = MarkovMachine.choice(this.chain.get(key))
    }
    return output.join(" ")
  }
}

let mm = new MarkovMachine("the cat in the hat");

module.exports = { MarkovMachine };