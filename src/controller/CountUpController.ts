import Counter from '../service/Counter';

const countUpController = {
    __name: 'countUpController',
    _counter: new Counter(),

    '#countUpBtn click'() {
        this._counter.increment();
        alert(this._counter.count);
    },

    reset() {
        this._counter.reset();
        alert('reset!');
    },
};

export default countUpController;
