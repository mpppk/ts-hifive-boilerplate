const resetController = {
    __name: 'resetController',

    '#resetBtn click'() {
        this.trigger('resetCount');
    },
};

export default resetController;
