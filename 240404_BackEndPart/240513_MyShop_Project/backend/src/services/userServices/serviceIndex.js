import { deleteUser } from "./deleteUser.js";
import { loginUser } from "./loginUser.js";
import { refreshToken } from "./refreshToken.js";
import { registerUser } from "./registerUser.js";
import { verifyUserEmail } from "./verifyUserEmail.js";

export const UserService = {
  registerUser,
  loginUser,
  verifyUserEmail,
  refreshToken,
  deleteUser,
};
