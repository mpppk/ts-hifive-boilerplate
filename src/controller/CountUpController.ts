import Counter from '../service/Counter'

const countUpController = {
    __name: 'countUpController',

    __ready: function(context) {
        this._counter = new Counter();
    },

    '#countUpBtn click': function() {
        this._counter.increment();
        alert(this._counter.count);
    },

    reset: function() {
        this._counter.reset();
        alert("reset!");
    }
};

export default countUpController;