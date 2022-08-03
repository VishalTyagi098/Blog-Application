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
  return (
    <Box sx={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <LoginContainer>
        <img src={loginLogo} alt="Login Logo" width={"100%"}/>
        <TextField id="standard-basic" label="Enter your name" variant="standard" sx={{margin:"10px 10px"}}/>
        <TextField id="standard-basic" label="Enter your Password" variant="standard" sx={{margin:"10px 10px"}}/>
        <Button variant="contained" sx={{margin:"10px 10px"}}>Login</Button>
        <Button variant="text" sx={{margin:"10px 10px"}}>Create new account</Button>
      </LoginContainer>
    </Box>
  )
}

export default Login