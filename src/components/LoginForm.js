import React                from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm= (props) => {
  const { handleSubmit } = props
  return (
    <div className="App-intro">
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <div>
            <Field
              name="userName"
              component="input"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div> 
  )
}

export default (reduxForm({
  form: 'loginform' // a unique identifier for this form
})(LoginForm))
