import { Controllization, IControllerObject, IControllerProps } from '../h5/IController';
const resetTemplate: (o?: object) => string = require('../assets/reset.ejs'); // tslint:disable-line no-var-requires

type ResetControllerEventSelectors = '#resetBtn click';
type ResetControllerObject = IControllerObject;

const resetController: Controllization<ResetControllerObject, ResetControllerEventSelectors> = {
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
