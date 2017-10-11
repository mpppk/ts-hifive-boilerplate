import * as JQuery from 'jquery';
import {EventCallback, IContext} from '../h5/IContext';
import {IController} from '../h5/IController';
import countUpController, {ICountUpController} from './CountUpController';
import resetController, {IResetController} from './ResetController';

interface IRootController extends IController {
    _countUpController: ICountUpController;
    _resetController: IResetController;
    '{rootElement} resetCount': EventCallback;
}

const rootController: IRootController = {
    __meta: {
        _countUpController: {
            rootElement: '#counterContainer',
        },
    },
    __name: 'rootController',
    _countUpController: countUpController,
    _resetController: resetController,

    '{rootElement} resetCount'(context: IContext, $el: JQuery<HTMLElement>) {
        this._countUpController.reset();
    },
};

export default rootController;
