import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap"
import PostList from './PostList';
import { Alert } from 'reactstrap';

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [flag , setFlag] = useState(false);
    const [home, setHome] = useState(true);

    var todos = JSON.parse(localStorage.getItem('todos'));

    const handleSubmit = e =>{
        e.preventDefault();
        if(todos === null){
            return toast("No user found",{
                type:"warning"
            })
        }

        const isdata = todos.filter(d => d.email === email);
        if(isdata.length !== 0){

             if(isdata[0].password===password){
                 
                setFlag(false);
                setHome(!home);
                setEmail("");
                setPassword("");
                return toast("successfully logged in",{
                    type:'success'
                })
            }else{
                setFlag(true);
                return toast("wrong password",{
                    type:'error'
                })
            }
        }
        
        
        else{
            setFlag(true);
            return toast("Credentials not found",{
                type:'error'
            })
        }
        
    }
    
    return (
         <div>
            {
               home?  (<Form style={{marginTop: "20%"}}>
                <ToastContainer />
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" 
                        placeholder="email-id" 
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                    /> 
    
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword"
                        placeholder="password "
                        value={password}
                        onChange={e => setPassword(e.target.value) }
                    />
                </FormGroup>

                <Button onClick={handleSubmit} type="submit" className="btn-lg btn-block px-5" 
                style={{marginTop :"4em", backgroundColor:"blue"}}>Log In</Button>

                 {
                     flag && <Alert color="info" style={{marginTop:"20%"}}>
                         please correct details
                     </Alert>
                 }
                </Form>):(
                    <PostList />
                )
            }   
        </div>  
    )
}

export default Login
