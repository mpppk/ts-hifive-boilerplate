import { IContext } from './IContext';

export interface IController extends IPartialController {
  __name: string;
}

export interface IPartialController {
  __meta: { [key: string]: IMetaControllerParams };
  __construct: (context: IContext) => void;
  __init: (context: IContext) => void;
  __ready: (context: IContext) => void;
  $find: (selector: string) => JQuery<HTMLElement>;
  trigger: (eventName: string, args?: any) => void;
  rootElement: HTMLElement;
}

export interface IMetaControllerParams {
  rootElement?: string | HTMLElement;
  useHandlers?: boolean;
}
