import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    public regions: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.bindChange();
    }

    abstract template(): string;

    public eventsMap(): { [key: string]: () => void } {
        return {};
    }

    public regionsMap(): { [key: string]: string } {
        return {};
    }

    private bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    private bindRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);

            if (element) {
                this.regions[key] = element;
            }
        }
    }

    private bindChange() {
        this.model.on("change", (): void => {
            this.render();
        });
    }

    public onRender(): void {}

    public render(): void {
        this.parent.innerHTML = "";

        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.bindRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }
}
