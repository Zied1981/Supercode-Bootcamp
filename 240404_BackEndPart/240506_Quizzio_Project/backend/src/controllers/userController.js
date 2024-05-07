import { UserService } from "../service/indexService.js";
//controller with async

async function getAllUsersCtrl(req, res) {
  try {
    const user = await UserService.showAllUsers();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not GET all users" });
  }
}

async function postCreateUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UserService.addUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not add a new User" });
  }
}

async function patchUpdateUserCtrl(req, res) {
  try {
    const userId = req.params.userId;
    const updateInfo = req.body;
    const updatedUser = await UserService.editUser(userId, updateInfo);
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not update the User" });
  }
}

async function deleteUserCtrl(req, res) {
  try {
    const userId = req.params.userId;
    const deletedUser = await UserService.removeUser(userId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "could not delete the User" });
  }
}

export const UserController = {
  getAllUsersCtrl,
  postCreateUserCtrl,
  patchUpdateUserCtrl,
  deleteUserCtrl,
};
