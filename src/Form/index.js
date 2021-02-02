import "../App.css";
import { useState } from "react";
import { StyledInput, StyledButton } from "./Form.style";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (validate()) {
      alert(JSON.stringify(validate()));
      // console.log(values);
    }
  };

  const validate = () => {
    const errors = {};

    if (!values.firstName) {
      return (errors.firstName = "Fill the First Name");
    }
    if (!values.lastName) {
      return (errors.lastName = "Fill the Last Name");
    }

    if (!values.email) {
      return (errors.email = "Fill the Email Address");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      return (errors.email = "Invalid Email Address");
    }
    if (!values.password) {
      return (errors.password = "Enter Your Password");
    } else if (values.password.length < 8) {
      return (errors.password = "Password must be min 8 characters!");
    } else if (values.password.search(/\d/) === -1) {
      return (errors.password = "Password must contain number!");
    } else if (values.password.search(/[A-Z]/) === -1) {
      return (errors.password =
        "Password must contain capital and lowercase letter!");
    } else if (values.password.search(/[a-z]/) === -1) {
      return (errors.password = "Password must contain lowercase letter!");
    } else if (values.password.search(/[^a-zA-Z0-9!@#$%^&*()_+]/) === -1) {
      return (errors.password = "Password must contain special character!");
    } else if (!values.confirmPassword) {
      return (errors.password = "Confirm Password");
    } else if (!(values.password === values.confirmPassword)) {
      return (errors.password = "Didn't Match Password");
    }
    if (!values.policy) {
      return (errors.policy = "You should accept Privacy Policy!");
    }
    return "Resgistered Succesfully!";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="fisrtName"
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
          value={values.firstName}
          placeholder="First Name"
        />
        <br />
        <StyledInput
          type="text"
          name="lastName"
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          value={values.lastName}
          placeholder="Last Name"
        />
        <br />
        <StyledInput
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          placeholder="Email Address"
        />
        <br />
        <StyledInput
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          placeholder="Password"
        />
        <br />
        <StyledInput
          type="password"
          name="confirmPassword"
          onChange={(e) =>
            setValues({ ...values, confirmPassword: e.target.value })
          }
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <br />
        <input
          type="checkbox"
          name="policy"
          // required
          value={values.policy}
          onChange={(e) => setValues({ ...values, policy: e.target.checked })}
        />
        <span style={{ fontSize: "1.2rem", paddingLeft: "0.5rem" }}>
          I accept the{" "}
          <a href="/" style={{ color: "white" }}>
            Privacy Policy
          </a>
          .
        </span>
        <br />
        <StyledButton type="submit" value="Register">
          Register
        </StyledButton>
        <p style={{ fontSize: "1rem" }}>
          Already have an account?{" "}
          <a href="/" style={{ color: "white" }}>
            Login.
          </a>
        </p>
      </form>
    </div>
  );
}

export default App;
