import React , { useState } from 'react';
import {
   Form,
   FormGroup,
   InputGroup,
   Label,
   Input,
   Button,
} from 'reactstrap';

import { v4 } from "uuid";
import Dropdowns from './Dropdowns';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import Home from './Home';
import { Alert} from "reactstrap"

const SignUpPage = ({ addTodos }) => {

   const [name,setName] = useState(""); 
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");
   const [profession, setProfession] = useState("");
   const [flag , setFlag] = useState(false);
   const [home, setHome] = useState(true);
 

   var todos = JSON.parse(localStorage.getItem('todos'));
   const handleSubmit = e => {
       e.preventDefault();
       if(name === "" || password === "" || email === "" 
           || profession === "" || number === ""){
            setFlag(true);
            return  toast("one or more field are missing" , {
            type:'error'
          }) 
        
        } 

        const isdata = todos.filter(d => d.email === email);

        if(isdata.length > 0){
          setFlag(true);
          return toast("email-id already exist",{
              type:"warning"
          })
      }

         const todo = {
             name,
             password,
             email,
             number,
             profession,
             id: v4()
         }

         // TODO
         addTodos(todo);

         toast("Login to check your credential",{
           type:'success'
         })

        //  console.log(name);
        //  console.log(password);
        //  console.log(profession);
        //  console.log(number);
        //  console.log(email);
        setHome(!home);
         setName("");
         setPassword("");
         setEmail("");
         setNumber("");
         setProfession("");
         setFlag(true);
       
   }
   
   
    
    return(
      
    <div>
      {
         home? (<Form>

           <ToastContainer position="bottom-right" />
           
           <FormGroup >  
            <InputGroup className=" mb-2">   
               <Label for="exampleName" className="inputMargin">Name : </Label>
               <Input type="text" name="name" id="name" 
                 placeholder="Enter your full name"
                 value={name}
                 onChange={e => setName(e.target.value)}
                 required
               />
             </InputGroup>

             <InputGroup className=" mb-2" >   
               <Label for="examplePassword" style={{  paddingRight : "0.5em"}}>Password : </Label>
               <Input type="password" name="password" id="examplePassword" 
                 placeholder="Enter your Password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 required
               />
             </InputGroup>

             <InputGroup className="mb-2" >   
               <Label for="exampleEmail" style={{paddingRight :"2.3em"}}>Email :</Label>
               <Input type="email" name="email" id="exampleEmail" 
                 placeholder="abc@gmail.com"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 required
               />
             </InputGroup>

             <InputGroup className=" mb-2">   
               <Label for="exampleNumber" style={{ paddingRight : "1em"}}>Phone number :</Label>
               <Input type="tel" name="number" id="phonenumber" 
                 placeholder="Enter 10-digit mobile number"  maxLength="10"
                 value={number}
                 onChange={e => setNumber(e.target.value)}
                 required
               />
             </InputGroup>
             
             <InputGroup>
                <Label for="exampleDropdown" style={{ paddingRight : "3em"}}>Profession :</Label>
                <Dropdowns 
                   changeProf = {profession => setProfession(profession)}
                />
             </InputGroup> 

         </FormGroup> 
          
           <Button onClick={handleSubmit} type="submit" className="btn-lg btn-success btn-block px-5" style={{marginTop :"4em"}}>Sign Up</Button>
         
           {
                 flag && <Alert color="info" style={{marginTop:"20%"}}>
                         please  fill again
                 </Alert>
            }
            

         </Form>):(
           <Home/>
         ) 
      }     
     </div>
      
    );
}

export default SignUpPage;