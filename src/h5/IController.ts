import { EventHandler, IContext } from './IContext';

type ControllerObject<T, U extends string> = T & IControllerObject & EventHandlers<U>;
export type Controllization<T, U extends string> = ControllerObject<T, U> &
  Partial<IControllerProps> &
  ThisType<ControllerObject<T, U> & IControllerProps>;

interface IControllerObject {
  __name: string;
}

type EventHandlers<T extends string> = { [K in T]: EventHandler };

interface IControllerProps {
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
