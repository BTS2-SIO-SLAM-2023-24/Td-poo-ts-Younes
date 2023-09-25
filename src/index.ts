import { chat } from "./chat";
import { chien } from "./chien";
import { employe } from "./employe";

const chien1 = new chien(1, "Buddy", 3, new Date("2023-09-01"), new Date("2023-09-15"),'yuski');
const chat1 = new chat(1, "Whiskers", 2, new Date("2023-08-20"), new Date("2023-09-5"));

const employe1 = new employe(1, "John", chien1);
const employe2 = new employe(2, "Alice", chat1);
const employe3 = new employe(3, "bob", null);