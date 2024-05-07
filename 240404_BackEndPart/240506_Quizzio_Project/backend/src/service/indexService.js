import { addUser } from "./userService/addUser.js";
import { editUser } from "./userService/editUser.js";
import { showAllUsers } from "./userService/showAllUsers.js";
import { removeUser } from "./userService/removeUser.js";

//UserService mit den service func für dieUsers
export const UserService = {
  addUser,
  editUser,
  showAllUsers,
  removeUser,
};
