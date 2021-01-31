import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
constructor(props){
    super(props);

    this.state={
        email:'',
        password:''
    };
}
handleSubmit =(event)=>{
    event.preventDefault();

    this.setState({email:'',password:''})
};
handleChange =(event)=>{
    const {value,name}=event.target;
    this.setState({[name]:value})
};

render() {
       return(
            <div className='sign-in'>
                 <h2>I already have an account</h2>
                    <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    type="email" 
                    value={this.state.email} 
                    label="Email" 
                    handleChange={this.handleChange} 
                    required/>
                    <FormInput name="password" 
                    type="password" 
                    value={this.state.password} 
                    label="password" 
                    handleChange={this.handleChange} 
                    required/>
                    
                <div className="buttons">
                <CustomButton type="submit" value="submit form">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN with Google</CustomButton>
                </div>
                    
                </form>
            </div>
        )
  } 
}
export default SignIn;