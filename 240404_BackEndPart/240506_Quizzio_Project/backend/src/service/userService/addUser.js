import { User } from "../../models/User.js";

export function addUser(userInfo) {
  return User.findOne({ name: userInfo.name }).then((foundUser) => {
    if (foundUser) {
      // Boat mit dem namen exisitert bereits!! (wollen wir nicht)
      // throw ist wie ein "negatives return" (zitat resul) und schickt den wert new Error("...") an das .catch()
      throw new Error("user with this name already exists");
    } else {
      return User.create(userInfo);
    }
  });
}
