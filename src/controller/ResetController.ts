import { Controllization, EventHandlers, IControllerObject, IControllerProps } from '../h5/IController';
const resetTemplate: (o?: object) => string = require('../assets/reset.ejs'); // tslint:disable-line no-var-requires

type ResetControllerEventHandlers = EventHandlers<'#resetBtn click'>;
type ResetControllerObject = IControllerObject & ResetControllerEventHandlers;

const resetController: Controllization<ResetControllerObject> = {
  ...({} as IControllerProps),
  __name: 'resetController',

  '#resetBtn click'() {
    this.trigger('resetCount');
  },

  __ready() {
    $(this.rootElement).append(resetTemplate());
  }
};

export default resetController;
