import { User } from "../../models/User.js";

export function editUser(userId, userUpdateInfo) {
  return User.findByIdAndUpdate(
    userId,
    { $set: userUpdateInfo },
    { new: true }
  );
}
