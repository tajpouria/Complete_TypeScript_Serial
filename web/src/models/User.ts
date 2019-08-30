import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { SyncApi } from "./SyncApi";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";

export interface UserProperties {
    id?: number;
    name?: string;
    age?: number;
}

const USERS_ENDPOINT = "http://localhost:3000/users";

export class User extends Model<UserProperties> {
    public static build(data: UserProperties): User {
        return new User(
            new Attributes(data),
            new SyncApi(USERS_ENDPOINT),
            new Eventing()
        );
    }

    public buildCollection() {
        new Collection<User, UserProperties>(USERS_ENDPOINT, user =>
            User.build(user)
        );
    }

    public setRandomAge() {
        const randomAge = Math.round(Math.random() * 99);
        this.set = { age: randomAge };
    }
}
