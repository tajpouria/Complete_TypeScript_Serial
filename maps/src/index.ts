import { Company } from "./Company";
import { User } from "./User";
import { Map } from "./Map";

const user = new User();
const company = new Company();
const map = new Map("map");

map.addMarker(user);
map.addMarker(company);
