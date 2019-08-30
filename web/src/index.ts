import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProperties, User } from "./models/User";

const users = new Collection<User, UserProperties>(
    "http://localhost:3000/users",
    (json: UserProperties) => User.build(json)
);

users.on("change", () => {
    const root = document.getElementById("root");

    if (root) {
        new UserList(root, users).render();
    }
});

users.fetch();
