import "./App.css";
import React, { createContext, useReducer, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CreatePost from "./components/CreatePost";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { reducer, intialState } from "./reducers/userReducer";
export const UserContext = createContext(); //context is created to provide to all child

const MyApp = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  
  useEffect(() => {
    const userfromLocalstorage = JSON.parse(localStorage.getItem("user"));
    if (userfromLocalstorage) {
      dispatch({
        type: "USER",
        payload: userfromLocalstorage,
      });
    } else {
     // history.push("/signin");
    }
  }, []);
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createpost">
        <CreatePost />
      </Route>
    </>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState); // we have provided reducer and intialstate
  // whenever any component calls the dispatch method it will come to usereducer than it will call the userreducer
  // and it will change the state as it is avalaible to  all component via useContext
  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <BrowserRouter>
        <Navbar />
        <MyApp />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
