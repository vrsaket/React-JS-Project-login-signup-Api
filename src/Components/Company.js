import Header from "./Header";
import {
    Container
} from "reactstrap";

 
function Company() {
    return (
        <Container style={{marginTop:"20%", marginLeft:"20%"}} fluid="md">
           <div className=" row d-flex flex-row ">
             <div  className="col-4  text-center">
                 <h3>Company :</h3>
             </div> 
             <div  className="col-6  mt-2 " style={{"float":"left"}}>Geeksynergy Technologies Pvt Ltd</div>
           </div>

           <div className=" row d-flex flex-row ">
             <div  className="col-4  text-center">
                 <h3>Email :</h3>
             </div> 
             <div  className="col-6  mt-2 " style={{"float":"left"}}> 
               <a href="#">xxxxxx@gmail.com</a>
             </div>
           </div>

           <div className=" row d-flex flex-row ">
             <div  className="col-4  text-center">
                 <h3>Address :</h3>
             </div> 
             <div  className="col-6  mt-2 " style={{"float":"left"}}>Sanjayanagar , Bengaluru-56</div>
           </div>

           <div className=" row d-flex flex-row ">
             <div  className="col-4  text-center">
                 <h3>Phone :</h3>
             </div> 
             <div  className="col-6  mt-2 " style={{"float":"left"}}>xxxxxxxx09</div>
           </div>
        </Container>
    )
}

export default Company;
