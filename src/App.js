import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import fire from './Fire';
import Login from './Components/Login';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos';
import {Addtodo} from './Components/Addtodo';
import {About} from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);
  const [loader,setLoader] = useState(false);
  const clearInput=()=>{
    setEmail("");
    setPassword("");
  }

  const clearError=()=>{
    setEmailError("");
    setPasswordError("");
  }

  const loginHandler = ()=>{
      loader?setLoader(false):setLoader(true);
    clearError();
    fire.auth().signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      setLoader(false);
      switch(err.code){
        
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found": 
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    })
    
  }

  const signupHandler = () =>{
    clearError();
    loader?setLoader(false):setLoader(true);
    fire.auth().createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      setLoader(false);
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        case "auth/user-not-found": 
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
                    break;
      }
    })
    
  }

  const logoutHandler = () =>{
    fire.auth().signOut();
  }

  const authListener = () =>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        setUser(user);
      }
      else{
        setUser("");
      }
    })
  }
  

  useEffect(() => {
    authListener();
  }, [])

  let initTodo;
  if (localStorage.getItem("todos")==null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
      setTodos(todos.filter((e)=>{
          return e!==todo;
      }));

      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo=(task,desc)=>{
    //console.log(title,desc);
    let slno;
    if(todos.length<1){
      slno=1;
    }
    else{
      slno = todos[todos.length-1].slno+1;
    }
    let newTask = {
      slno:slno,
      task:task,
      desc:desc
    }
    setTodos([...todos,newTask]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
      <div className="App">
        {user?
        <Router>
        <Header title="My Todos List" searchbar="true" logoutHandler={logoutHandler} setLoader={setLoader}/>
        <Switch>
            <Route exact path="/" render={()=>{
              return(
                <>
                <Addtodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
                </>
              )
            }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        <Footer/>
      </Router>:
      <Login 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loginHandler={loginHandler}
      signupHandler={signupHandler}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      loader={loader}
      ></Login>}
      </div>
    
  );
}

export default App;
