import Counter from '../src/service/Counter';

it('increment count 0 to 1', () => {
    const counter = new Counter();
    expect(counter.count).toBe((0));
    counter.increment();
    expect(counter.count).toBe((1));
});
