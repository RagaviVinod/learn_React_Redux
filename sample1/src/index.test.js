import expect from 'expect';
//it always asserts true until you pass false in expect ()
describe('Our first test',() => {
    it('should pass', () => {
        expect(true).toEqual(true);
    });
});

describe('Our second test',()=>{
    it('should fail', ()=>{
        expect("ragavi").toEqual("ragavi");
    });
    it('should pass',()=>{
        expect("ragavi").toEqual("ragavi");
    });
});