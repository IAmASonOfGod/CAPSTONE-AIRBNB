import React from "react";
import { LoginContainer, FormContainer } from "./Login.styled";
import { ReactComponent as AirBnBLogo } from "../../components/Header/Logo/AirBnB-Logo.svg";
import { useDropDownContext } from "../../Context/DropDownContext.jsx";
import { useLoginContext } from "../../Context/LoginContext.tsx";

const Login = () => {
  const { handleLogoClick } = useDropDownContext();
  const { username, password, handleLogin, handleInputChange, error } =
    useLoginContext();

  return (
    <LoginContainer>
      <div className="logo" onClick={handleLogoClick}>
        <AirBnBLogo />
      </div>
      <h2>Login</h2>
      <FormContainer onSubmit={handleLogin}>
        <div className="input1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username" // Add name attribute
            value={username}
            onChange={handleInputChange} // Use handleInputChange
            required
          />
        </div>
        <div className="input2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password" // Add name attribute
            value={password}
            onChange={handleInputChange} // Use handleInputChange
            required
          />
        </div>
        {error && (
          <div className="err-msg">
            <p>Login failed! Please try again.</p>
          </div>
        )}

        <div className="Btns">
          <button className="ForgotBtn" type="button">
            Forgot Password?
          </button>

          <button className="LoginBtn" type="submit">
            Login
          </button>
        </div>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
