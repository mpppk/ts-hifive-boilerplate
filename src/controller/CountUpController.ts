import { IContext } from '../h5/IContext';
import { Controllization } from '../h5/IController';
import Counter from '../service/Counter';
const counterTemplate: (o?: object) => string = require('../assets/counter.ejs'); // tslint:disable-line no-var-requires

type CountUpControllerProps = typeof props & {
  reset: () => void;
};

const props = {
  _counter: new Counter()
};

type EventSelector = '#countUpBtn click';
export const countUpController: Controllization<CountUpControllerProps, EventSelector> = {
  __name: 'countUpController',
  ...props,
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
