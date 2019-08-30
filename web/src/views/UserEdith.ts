import { View } from "./View";
import { User, UserProperties } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdith extends View<User, UserProperties> {
    public regionsMap(): { [key: string]: string } {
        return {
            userShow: ".user-show",
            userForm: ".user-form"
        };
    }

    public onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }

    public template(): string {
        return `
          <div>
            <div class="user-show"></div>
            <div class="user-form"></div>
          </div>
       `;
    }
}
