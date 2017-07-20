import { expect } from 'chai';
import 'mocha';
import Counter from '../src/service/Counter';

describe('Counter', () => {
    describe('#increment()', () => {
        it('should increment count', () => {
            const counter = new Counter();
            expect(counter.count).to.equal(0);
            counter.increment();
            expect(counter.count).to.equal(1);
        });
    });
});
