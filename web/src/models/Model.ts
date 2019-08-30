import { AxiosPromise, AxiosResponse } from "axios";

import { SerializeAble } from "./SyncApi";

type Callback = () => void;

interface Attributes<T> {
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
}

interface SyncApi<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Eventing {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}

export class Model<T extends SerializeAble> {
    constructor(
        public attributes: Attributes<T>,
        public syncApi: SyncApi<T>,
        public eventing: Eventing
    ) {}

    get on() {
        return this.eventing.on;
    }

    get trigger() {
        return this.eventing.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set set(update: T) {
        this.attributes.set(update);
        this.trigger("change");
    }

    fetch() {
        const id = this.attributes.get("id");
        if (!id) {
            throw new Error("Cannot fetch instance without id");
        } else if (typeof id === "number") {
            this.syncApi
                .fetch(id)
                .then((response: AxiosResponse) => {
                    this.set = response.data;
                })
                .catch(() => this.trigger("Error at fetching the instance"));
        }
    }

    save() {
        this.syncApi
            .save(this.attributes.getAll())
            .then(() => {
                this.trigger("save");
            })
            .catch(() => {
                this.trigger("Error at saving the instance");
            });
    }
}
