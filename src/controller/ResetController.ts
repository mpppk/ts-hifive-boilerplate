import {IController} from './IController';

interface IResetController extends IController {
    '#resetBtn click': any;
}

const resetController: IResetController = {
    __name: 'resetController',

    '#resetBtn click'() {
        this.trigger!('resetCount');
    },
};

export default resetController;
