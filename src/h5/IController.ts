import { EventHandler, IContext } from './IContext';

export type Controllization<T extends IControllerObject> = T &
  Partial<IControllerProps> &
  ThisType<T & IControllerProps>;

export interface IControllerObject {
  __name: string;
}

export interface IControllerProps {
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

export type EventHandlers<T extends string> = { [U in T]: EventHandler };
