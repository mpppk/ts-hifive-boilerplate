import Counter from '../service/Counter'

export default {
    __name: 'HelloWorldController',

    __ready: (context) => {
        this._counter = new Counter();
    },

    '#btn click': () => {
        this._counter.increment();
        alert(this._counter.count);
    }
};
