import {useState} from 'react';
import {Box,TextField,Button,styled} from '@mui/material';
import loginLogo from './login-logo.png';

// Styled components:-
const LoginContainer=styled(Box)`
  width:25em;
  border:2px solid red;
  display:flex;
  flex-direction:column;
`;



function Login() {
  // dummy initial value of signup state
  const initalSignupValues={
    name:"",
    username:"",
    password:"",
  }

  // login or signup state
  const [login, setLogin] = useState(0);
  // singup value state
  const [signupValue, setsignupValue] = useState(initalSignupValues);

  // toggleLogin function
  function toggleLogin(){
    if(login===0){
      setLogin(1);
    }
    else{
      setLogin(0);
    }
  }

  // getSignupValue function
  function getSignupValue(e){
    setsignupValue({...signupValue,[e.target.name]:e.target.value});
    // last alphabet is not taken by this function, fix it!
    
    // console.log(signupValue.name);
    // console.log(signupValue.username);
    // console.log(signupValue.password);
  }


  return (
    <Box sx={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      {
        login===0 ?
      
          <LoginContainer>

            <img src={loginLogo} alt="Login Logo" width={"100%"}/>

            <TextField id="standard-basic" label="Enter your name" variant="standard" sx={{margin:"10px 10px"}}/>
            <TextField id="standard-basic" label="Enter your Password" variant="standard" sx={{margin:"10px 10px"}}/>

            <Button variant="contained" sx={{margin:"10px 10px"}}>Login</Button>
            <Button variant="text" onClick={toggleLogin} sx={{margin:"10px 10px"}}>Create new account</Button>

          </LoginContainer>
    
        :
          <LoginContainer>

            <img src={loginLogo} alt="Login Logo" width={"100%"}/>

            <TextField onChange={(e)=>getSignupValue(e)} name="name" id="standard-basic" label="Enter your name" variant="standard" sx={{margin:"10px 10px"}}/>
            <TextField onChange={(e)=>getSignupValue(e)} name="username" id="standard-basic" label="Enter username" variant="standard" sx={{margin:"10px 10px"}}/>
            <TextField onChange={(e)=>getSignupValue(e)} name="password" id="standard-basic" label="Enter your Password" variant="standard" sx={{margin:"10px 10px"}}/>

            <Button variant="contained" sx={{margin:"10px 10px"}}>Signup</Button>
            <Button variant="text" onClick={toggleLogin} sx={{margin:"10px 10px"}}>Already have an account?</Button>

          </LoginContainer>

    }
    </Box>
  )
}

export default Login