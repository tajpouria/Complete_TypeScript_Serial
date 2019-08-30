import Axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
    public models: T[] = [];
    private eventing = new Eventing();

    constructor(public rootUrl: string, public deSerialize: (json: K) => T) {}

    get on() {
        return this.eventing.on;
    }

    get trigger() {
        return this.eventing.trigger;
    }

    fetch(): void {
        Axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((json: K) => {
                this.models.push(this.deSerialize(json));
            });
            this.trigger("change");
        });
    }
}
