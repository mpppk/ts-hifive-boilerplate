import {IContext} from './IContext';

export interface IController {
    __name: string;
    __meta?: { [key: string]: IMetaControllerParams; };
    __construct?: (context: IContext) => void;
    __init?: (context: IContext) => void;
    __ready?: (context: IContext) => void;
    $find?: (selector: string) => JQuery<HTMLElement>;
    trigger?: (eventName: string, args?: any) => void;
    rootElement?: HTMLElement;
}

export interface IMetaControllerParams {
    rootElement?: string | HTMLElement;
    useHandlers?: boolean;
}
