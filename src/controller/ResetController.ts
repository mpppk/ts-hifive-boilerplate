const resetController = {
    __name: 'resetController',

    '#resetBtn click': function() {
        this.trigger('resetCount');
    }
};

export default resetController;