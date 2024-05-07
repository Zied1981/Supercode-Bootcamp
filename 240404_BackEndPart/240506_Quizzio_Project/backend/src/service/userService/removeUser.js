import { User } from "../../models/User.js";

export function removeUser(userId) {
  return User.findByIdAndDelete(userId).then((removedUser) => {
    if (!removedUser) throw new Error(" user with this id doesn't exist!");
    else return removedUser;
  });
}
