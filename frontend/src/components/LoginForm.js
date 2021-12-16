import React, { useState } from "react";
import { post } from "../http/actions";
import { useHistory } from "react-router-dom";
import './CssSheets/LoginForm.css';
import { Button}  from './Button';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [utr, setUtr] = useState("");
  const [age, setAge] = useState("");
  const [favoriteSurface, setFavoriteSurface] = useState("");
  const [gameStyle, setGameStyle] = useState("");

  const [isSignup, setIsSignup] = useState(false);
  
  const history = useHistory()

  const determineAction= () => {
    if(isSignup){
      register()
    }else{
      login()
    }
  }


  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  const login = () => {
    post("/users/login", {
      username: username,
      password: password,
    })
      .then((results) => {
        console.log("RESULTS", results.data);
        if (results.data.success) {
          console.log("NOW SETTING TOKEN", results.data.token);
          localStorage.setItem("token", results.data.token);
          history.push('/challenges')
        }
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };
  
  console.log(isSignup);

  const register = () => {
    post("/users/sign-up", {
      username: username,
      password: password,
      age: age,
      utr: utr,
      favoriteSurface: favoriteSurface,
      gamestyle: gameStyle
    })
      .then((results) => {
        console.log("RESULTS", results.data);
        if (results.data.success) {
          console.log("NOW SETTING TOKEN", results.data.token);
          localStorage.setItem("token", results.data.token);
          history.push('/challenges')
        }
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };
  
  console.log(isSignup);

 




  return (
    <div className='login'>
      {/* set the ERROR */}
      <div>
        {/* <h2>Welcome to your Tennis Challenge!</h2> */}
      </div>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={determineAction}>{isSignup? 'Create Account':'Sign-In'}</Button>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={switchMode}>Register</Button>
      <div>
        {/* <label>Username</label> */}
        <input placeholder="User Name"value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        {/* <label>Password</label> */}
        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {isSignup && (
        <div>
          <div>
            {/* <label>U.T.R.</label> */}
            <input placeholder='U.T.R. from 0 to 15' value={utr} onChange={(e) => setUtr(e.target.value)} />
          </div>
          <div>
            {/* <label>Age</label> */}
            <input placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            {/* <label>Favorite Surface</label> */}
            <input
            placeholder='Favorite Surface'
              value={favoriteSurface}
              onChange={(e) => setFavoriteSurface(e.target.value)}
            />
          </div>
          <div>
            {/* <label>Game Style</label> */}
            <input
            placeholder='Game Style'
              value={gameStyle}
              onChange={(e) => setGameStyle(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginForm;
