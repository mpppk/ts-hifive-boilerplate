import { IContext } from '../h5/IContext';
import { Controllization, EventHandlers, IControllerObject } from '../h5/IController';
import { countUpController } from './CountUpController';
import resetController from './ResetController';

type RootControllerEventSelectors = '{rootElement} resetCount';
type IRootControllerObject = typeof childControllers & IControllerObject & RootControllerEventHandlers;
type RootControllerEventHandlers = EventHandlers<'{rootElement} resetCount'>;

const childControllers = {
  _countUpController: countUpController,
  _resetController: resetController
};

const rootController: Controllization<IRootControllerObject, RootControllerEventSelectors> = {
  ...childControllers,
  __meta: {
    _countUpController: {
      rootElement: '#counterContainer'
    }
  },
  __name: 'rootController',

  '{rootElement} resetCount'(_context?: IContext, _$el?: JQuery<HTMLElement>) {
    this._countUpController.reset();
  }
};

export default rootController;
