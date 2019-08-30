type Events = { [propName: string]: Callback[] };
type Callback = () => void;

export class Eventing {
    public events: Events = {};

    public on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };

    public trigger = (eventName: string): void => {
        const handlers = this.events[eventName];
        if (!handlers || !handlers.length) {
            return;
        }
        handlers.forEach((callback: Callback): void => {
            callback();
        });
    };
}
