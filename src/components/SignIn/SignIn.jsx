import React from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from "./SignIn.style";
import { googleSignInStart, emailSignInStart } from "../../redux/user/action";

export class PureSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
    this.setState({
      email: "",
      password: ""
    })
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
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
          <ButtonsBarContainer>
            <FormButton type="submit"> Sign in </FormButton>
            <FormButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </FormButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export const SignIn = connect(
  null,
  mapDispatchToProps
)(PureSignIn);
