import React,{useState} from 'react';
import { BounceLoader } from 'react-spinners';

const Login = (props) => {
    const  [color, setColor] = useState("#fff");
    const {email,setEmail,password,setPassword,loginHandler,signupHandler,hasAccount,setHasAccount,emailError,passwordError,loader}=props;
    return (
        <section className="login">
            
            <div className="loginContainer">
                <label className="fontw">My Todos List</label>
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={e=>{setPassword(e.target.value)}}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount?
                    <>
                        {loader?<BounceLoader color={color}/>:<button className="w" onClick={loginHandler}>Login</button>}
                        <p>Don't have an account?<span onClick={()=>{setHasAccount(!hasAccount)}}>Sign up</span></p>
                    </>:
                    <>
                        {loader?<BounceLoader color={color}/>:<button className="w" onClick={signupHandler}>Signup</button>}
                        <p>Already have an account?<span onClick={()=>{setHasAccount(!hasAccount)}}>Login</span></p>
                    </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Login;


