export interface IContext {
  controller: any;
  evArg: any;
  event: Event;
  selector: JQuery;
  selectorType: number;
}

export type EventHandler = (context?: IContext, $el?: JQuery<HTMLElement>) => void;
