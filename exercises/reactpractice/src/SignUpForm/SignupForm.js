import React from "react"

const SignupForm = props => {
  return (

    <form onSubmit = {props.handleSubmit}>
       <label> First Name <input
       name="firstName"
       value={props.firstName}
       onChange={props.handleChange}
       type="text"/>
       </label> <br/>

       <label> Last Name <input
       name="lastName"
       value={props.lastName}
       onChange={props.handleChange}
       type="text"/>
       </label><br/>

       <label> Email <input
       name="email"
       value={props.email}
       onChange={props.handleChange}
       type="text"/>
       </label><br/>

       <label> Password <input
       name="password"
       value={props.password}
       onChange={props.handleChange}
       type="text"/>
       </label><br/>

       <label> Confirm Password <input
       name="passwordConfirm"
       value={props.passwordConfirm}
       onChange={props.handleChange}
       type="text"/>
        </label><br/>
        <button> Submit </button>
    </form>
  )
}

export default SignupForm;
