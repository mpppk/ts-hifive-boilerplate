import {EventCallback} from '../h5/IContext';
import {IController} from '../h5/IController';

export interface IResetController extends IController {
    '#resetBtn click': EventCallback;
}

const resetController: IResetController = {
    __name: 'resetController',

    '#resetBtn click'() {
        this.trigger!('resetCount');
    },
};

export default resetController;
