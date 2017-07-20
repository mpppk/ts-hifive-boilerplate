import countUpController from './CountUpController';
import resetController from './ResetController';

const rootController = {
    __name: 'rootController',
    _countUpController: countUpController,
    _resetController: resetController,

    '{rootElement} resetCount'(context, $el) {
        this._countUpController.reset();
    },
};

export default rootController;
