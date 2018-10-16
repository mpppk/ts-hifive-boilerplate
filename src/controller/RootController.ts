import { IContext } from '../h5/IContext';
import { Controllization } from '../h5/IController';
import { countUpController } from './CountUpController';
import resetController from './ResetController';

type EventSelector = '{rootElement} resetCount';
const props = {
  _countUpController: countUpController,
  _resetController: resetController
};

const rootController: Controllization<typeof props, EventSelector> = {
  ...props,
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
