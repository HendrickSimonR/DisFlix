import React from 'react';

function SigninForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={props.update('username')} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={props.update('password')} />
        <button>{props.formType}</button>
      </form>
    </div>
  )
}

export default SigninForm;