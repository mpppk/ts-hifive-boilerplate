import Counter from '../service/Counter';
import {IController} from './IController';
const counterTemplate: (o?: object) => string = require('../assets/counter.ejs'); // tslint:disable-line no-var-requires

interface ICountUpController extends IController {
    _counter: Counter;
    '#countUpBtn click': any;
    reset: any;
}

const countUpController: ICountUpController = {
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

    __ready(context: any) {
        $(this.rootElement).append(counterTemplate());
    },
};

export default countUpController;
