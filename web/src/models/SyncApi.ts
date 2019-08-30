import axios, { AxiosPromise } from "axios";

export interface SerializeAble {
    id?: number;
}

export class SyncApi<T extends SerializeAble> {
    constructor(private rootUrl: string) {}

    public fetch = (id: number): AxiosPromise => {
        return axios.get(`${this.rootUrl}/${id}`);
    };

    public save = (data: T): AxiosPromise => {
        const { id } = data;

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`);
        } else {
            return axios.post(`${this.rootUrl}`, data);
        }
    };
}
