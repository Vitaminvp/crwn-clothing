import React from "react";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import "./SignIn.scss";
import { auth, signInWithGoogle } from "../../firebase/utils";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error)
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSignInWithGoogle = e => {
    e.preventDefault();
    return signInWithGoogle();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <FormButton type="submit"> Sign in </FormButton>
          <FormButton onClick={this.handleSignInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </FormButton>
        </form>
      </div>
    );
  }
}
