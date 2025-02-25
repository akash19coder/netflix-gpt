export const useValidateForm = (name, email, password) => {
  console.log("name -" + name);
  console.log("email -" + email);
  console.log("passord -" + password);

  const isNameValid = true;

  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email,
  );

  //Reduce the strength of password validation
  const isPasswordValid = true;
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
  //   password,
  // );

  if (!isNameValid) return "Please enter valid name";
  else if (!isEmailValid) return "Please enter valid Email";
  else if (!isPasswordValid) return "Enter strong password";
  else return null;
};
