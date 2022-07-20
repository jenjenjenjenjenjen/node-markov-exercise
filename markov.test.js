const { MarkovMachine } = require("./markov");

describe("markov machine", function () {
    
    test('make chains', function () {
        let mm = new MarkovMachine("the cat in the hat");
        expect.any(Map)
    });
    test('make text', function() {
        let mm = new MarkovMachine("the cat in the hat");
        expect(mm.makeText()).toContain('hat');
    });
})