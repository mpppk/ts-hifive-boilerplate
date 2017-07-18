import Counter from '../service/Counter'
import {IController} from './IController'

type ControllerObject = {__name: string}

const helloWorldController = <IController>{
    __name: 'HelloWorldController',

    __ready: (context) => {
        this._counter = new Counter();
    },

    '#btn click': () => {
        this._counter.increment();
        alert(this._counter.count);
    }
};

export default helloWorldController;