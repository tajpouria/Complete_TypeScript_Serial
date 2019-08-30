import { View } from "./View";
import { User, UserProperties } from "../models/User";

export class UserShow extends View<User, UserProperties> {
    public template(): string {
        return `
        <div>
          <h1>User Form</h1>
          <div>${this.model.get("name")}</div>
          <div>${this.model.get("age")}</div>
        </div>`;
    }
}
