export interface IController {
    __name: string;
    __meta?: any;
    __construct?: (context: any) => void;
    __init?: (context: any) => void;
    __ready?: (context: any) => void;
    $find?: (selector: string) => JQuery;
    trigger?: (eventName: string, args?: any) => void;
    rootElement?: any;
}
