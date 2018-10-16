import { Controllization } from '../h5/IController';
const resetTemplate: (o?: object) => string = require('../assets/reset.ejs'); // tslint:disable-line no-var-requires

type EventSelector = '#resetBtn click';

const resetController: Controllization<{}, EventSelector> = {
  __name: 'resetController',

  '#resetBtn click'() {
    this.trigger('resetCount');
  },

  __ready() {
    $(this.rootElement).append(resetTemplate());
  }
};

export default resetController;
