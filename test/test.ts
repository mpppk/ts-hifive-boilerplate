import 'mocha';
import * as assert from 'power-assert';
import Counter from '../src/service/Counter';

describe('Counter', () => {
    describe('#increment()', () => {
        it('should increment count', () => {
            const counter = new Counter();
            assert(counter.count === 0);
            counter.increment();
            assert(counter.count === 1);
        });
    });
});
