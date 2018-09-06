import { EventCallback, IContext } from '../h5/IContext';
import { IController, IPartialController } from '../h5/IController';
import Counter from '../service/Counter';
const counterTemplate: (o?: object) => string = require('../assets/counter.ejs'); // tslint:disable-line no-var-requires

export interface ICountUpController extends IController {
  _counter: Counter;
  '#countUpBtn click': EventCallback;
  reset: () => void;
}

const countUpController: ICountUpController = {
  ...({} as IPartialController),
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

export default countUpController;
