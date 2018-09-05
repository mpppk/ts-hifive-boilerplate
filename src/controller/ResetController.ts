import {EventCallback} from '../h5/IContext';
import {IController} from '../h5/IController';
const resetTemplate: (o?: object) => string = require('../assets/reset.ejs'); // tslint:disable-line no-var-requires

export interface IResetController extends IController {
    '#resetBtn click': EventCallback;
}

const resetController: IResetController = {
    __name: 'resetController',

    '#resetBtn click'() {
        this.trigger!('resetCount');
    },

    __ready() {
        $(this.rootElement!).append(resetTemplate());
    },
};

export default resetController;
