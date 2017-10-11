import {IController} from './IController';

export interface IContext {
    controller: IController;
    evArg: any;
    event: Event;
    selector: JQuery;
    selectorType: number;
}

export type EventCallback = (context?: IContext, $el?: JQuery<HTMLElement>) => void;
