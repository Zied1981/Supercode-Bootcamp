function checking() {
  let savePassword = document.querySelector("#password").value;
  let status = document.querySelector("p");
  //hier mit.length werden die eingegebenen Zeichen addiert.

  savePassword.length < 8
    ? (status.innerHTML = "password is too short")
    : (status.innerHTML = "welcome to your Account");
  console.log(savePassword);
}
