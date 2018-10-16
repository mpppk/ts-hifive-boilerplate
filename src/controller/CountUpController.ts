import { IContext } from '../h5/IContext';
import { Controllization, IControllerObject } from '../h5/IController';
import Counter from '../service/Counter';
const counterTemplate: (o?: object) => string = require('../assets/counter.ejs'); // tslint:disable-line no-var-requires

interface ICountUp extends IControllerObject {
  _counter: Counter;
  reset: () => void;
}

type CountUpControllerEventSelectors = '#countUpBtn click';
export const countUpController: Controllization<ICountUp, CountUpControllerEventSelectors> = {
  __name: 'countUpController',
  _counter: new Counter(),

  '#countUpBtn click'() {
    this._counter.increment();
    alert(this._counter.count);
  },

  reset() {
    this._counter.reset();
    alert('reset!');
  },

  __ready(_context: IContext) {
    $(this.rootElement).append(counterTemplate());
  }
};
