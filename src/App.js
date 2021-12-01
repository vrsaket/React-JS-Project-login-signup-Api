import React, { useState , useEffect } from 'react';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from './Components/Header';
import SignUpPage from './Components/SignUpPage';
import TodoSignUp from './Components/TodoSignUp';
import Login from './Components/Login';
import Company from './Components/Company';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import {
   Navbar
} from 'reactstrap';
import { FaCodepen} from "react-icons/fa"
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import Home from './Components/Home';
import Nofound from './Components/Nofound';

 const App = () => {
    const [todos, setTodos] = useState([]);


    useEffect( () => {
       const localTodos = localStorage.getItem("todos");
       console.log({localStorage})
       if(localTodos) {
          setTodos(JSON.parse(localTodos));
       }
    }, [])


    const addTodos = async todo => {
        setTodos([...todos, todo])
    }

   //  const markComplete = id => {
   //     setTodos(todos.filter(todo => todo.id !== id))
   //  }
      

    useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

     return (

      <Router>
        <Container>
           
        <Navbar
                color="secondary"
                expand="lg"
                fixed="top"              
            >
                 {/* Left  */}

                 <div className="d-flex flex-row">
                   <span className="">
                       <FaCodepen size='40px'  />
                   </span>
                   <Link to="/home" className="fs-3 text-decoration-none p-2  cursor-pointer" >Geeksynergy</Link>
                 </div>

                 {/* Right  */}

                 <div  style={{"float" : "right"}} className="d-flex flex-row displaycontent" >
                       
                    <button type="button" className="btn p-2" >
                       <Link to="/signup" className="text-decoration-none text-warning " >Sign-Up</Link>
                     </button>      
                    <button className="btn px-4">
                       <Link to="/login" className="text-decoration-none text-warning">Login</Link>
                    </button>
                    <button className="btn btn-dark ">
                       <Link to="/company-info" className="text-decoration-none">Company Info</Link>
                    </button>
   
                 </div>
                             
            </Navbar>

            <Switch>
               <Route path="/home">
                 <Home />
               </Route>
               <Route path="/signup">
                  <SignUpPage addTodos={addTodos}/>
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="/company-info">
                    <Company />
               </Route>
               <Route>
                  <Nofound />
               </Route>
            </Switch>
           {/* <TodoSignUp todos={todos} markComplete={markComplete} /> */}
                  
        </Container>
       </Router> 
     );

 }


export default App;
