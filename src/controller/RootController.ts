import { EventCallback, IContext } from '../h5/IContext';
import { IController, IPartialController } from '../h5/IController';
import countUpController, { ICountUpController } from './CountUpController';
import resetController, { IResetController } from './ResetController';

interface IRootController extends IController {
  _countUpController: ICountUpController;
  _resetController: IResetController;
  '{rootElement} resetCount': EventCallback;
}

const rootController: IRootController = {
  ...({} as IPartialController),
  __meta: {
    _countUpController: {
      rootElement: '#counterContainer'
    }
  },
  __name: 'rootController',
  _countUpController: countUpController,
  _resetController: resetController,

  '{rootElement} resetCount'(_context?: IContext, _$el?: JQuery<HTMLElement>) {
    this._countUpController.reset();
  }
};

export default rootController;
