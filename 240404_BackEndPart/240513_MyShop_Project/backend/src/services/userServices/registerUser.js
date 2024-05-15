import { User } from "../../models/User.js";
import { generateRandomSalt, hash } from "../../utils/hash.js";
import { sendEmail } from "../../utils/sendEmail.js";
import { generateRandomSixDigitCode } from "../../utils/sixDigitCode.js";
import { userToView } from "../userServices/helpers.js";

export async function registerUser({ firstname, lastname, email, password }) {
  const foundUserWithEmail = await User.findOne({ email });
  if (foundUserWithEmail)
    throw new Error("User with this email already has an account");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`); // Klartext password mit salt hashen

  const sixDigitCode = generateRandomSixDigitCode();

  const user = await User.create({
    firstname,
    lastname,
    email,
    passwordHash, // hash(password + passwordSalt)
    passwordSalt, // salt
    // email verification stuff:
    isEmailVerified: false, // can be set to true via NEW /verifyEmail endpoint
    sixDigitCode,
  });

  await sendEmailVerification(user);

  return userToView(user);
}
async function sendEmailVerification(user) {
  const result = await sendEmail({
    to: user.email,
    subject: "Welcome to myShop",
    text: `Hi ${user.firstname},
  welcome to our Shop 🎉!!!
  Please enter the below six-digit-code verify your account to be able to login.
  ${user.sixDigitCode}
  See you on the other side :)
  - Zied from myShop
  `,
  });
  console.log(result);
}
