import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../shared/forms/text-input';
import Message from '../shared/message';
import { Form, FormGroup, Col, Button, Checkbox } from 'react-bootstrap';

const LoginForm = ({usernameValidationState, passwordValidationState, onUsernameChange,
    onPasswordChange, onRememberMeChange, onSubmit, usernameErrorMessages,
    passwordErrorMessages, pageErrorMessages, isInvalidCredentials}) => {

  return (
    <div className="colspan-12 center-block login-form-container">
      <div>
        <Message isPageMessage size={3} messages={pageErrorMessages} state="error" isVisible={isInvalidCredentials} />
      </div>
      <Form horizontal bsClass="login-form form">
        <TextInput controlId="username" validationState={usernameValidationState} labelCol={3}
          inputCol={9} onChange={onUsernameChange} errorMessages={usernameErrorMessages}
          labelValue="Username" inputClass="login-textbox" controlType="text" />
        <TextInput controlId="password" validationState={passwordValidationState} labelCol={3}
          inputCol={9} onChange={onPasswordChange} errorMessages={passwordErrorMessages}
          labelValue="Password" inputClass="login-textbox" controlType="password" />
        <FormGroup>
          <Col xsOffset={3} xs={9}>
            <Checkbox onChange={onRememberMeChange} bsClass="login-remember-me-checkbox checkbox">
              Remember Me
            </Checkbox>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xsOffset={3} xs={9}>
            <Button type="submit" onClick={onSubmit} bsClass="login-submit-button btn">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  usernameValidationState: PropTypes.string,
  passwordValidationState: PropTypes.string,
  usernameErrorMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  passwordErrorMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  pageErrorMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  isInvalidCredentials: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
