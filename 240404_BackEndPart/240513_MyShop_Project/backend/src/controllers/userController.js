import { UserService } from "../services/userServices/serviceIndex.js";

async function postRegisterUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.registerUser(userInfo);
    res.status(201).json({ result }); // 201 Status = "Created"
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register user" });
  }
}

async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.loginUser(userInfo);
    res.status(201).json({ result }); // 201 Status = "Created"
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not login user" });
  }
}

async function postVerifyUserEmailCtrl(req, res) {
  try {
    const verifyEmailInfo = {
      userId: req.body.userId,
      sixDigitCode: req.body.sixDigitCode,
    };
    const result = await UserService.verifyUserEmail(verifyEmailInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

async function postRefreshTokenCtrl(req, res) {
  try {
    if (req.verifiedTokenClaims.type !== "refresh") {
      return res.status(401).json({ message: "Token must be of type refresh" });
    }
    const result = await UserService.refreshToken(req.authenticatedUserId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

async function deleteUserCtrl(req, res) {
  try {
    const userId = req.params.userId;
    const result = await UserService.deleteUser(userId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not delete user" });
  }
}

export const UserController = {
  postRegisterUserCtrl,
  postLoginUserCtrl,
  postVerifyUserEmailCtrl,
  postRefreshTokenCtrl,
  deleteUserCtrl,
};
