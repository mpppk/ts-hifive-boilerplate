import Counter from "../src/service/Counter";
import  'mocha';
import { expect } from 'chai';

describe('Counter', function() {
    describe('#increment()', function() {
        it('should increment count', function() {
            const counter = new Counter();
            expect(counter.count).to.equal(0);
            counter.increment();
            expect(counter.count).to.equal(1);
        });
    });
});