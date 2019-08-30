import { View } from "./View";
import { User, UserProperties } from "../models/User";

export class UserForm extends View<User, UserProperties> {
    public eventsMap(): { [key: string]: () => void } {
        return {
            "click:.random-age": this.setRandomAge,
            "click:.set-name": this.setName,
            "click:.save-model": this.saveModel
        };
    }

    public template(): string {
        return `
        <div>
            <label>User Name:
            <input placeholder="${this.model.get("name")}"/>
            </label/>
            <button class="set-name">Set Name</button>
            <button class="random-age">Set Random Age</button>
            <button class="save-model">Save</button>
        </div>`;
    }

    private setName = () => {
        const input = this.parent.querySelector("input");
        if (input) {
            const name = input.value;
            this.model.set = { name };
        } else {
            throw new Error("Input not found");
        }
    };

    private setRandomAge = (): void => {
        this.model.setRandomAge();
    };

    private saveModel = (): void => {
        this.model.save();
    };
}
