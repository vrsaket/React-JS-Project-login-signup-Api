import React  from 'react';
import Select from 'react-select';
const Dropdowns = ( { changeProf } ) => {

   var profession = [
      {
        value:1,
        label:"Student"
      },
      {
        value:2,
        label:"Software Engineer"
      },
      {
        value:3,
        label:"Govt. Employee"
      },
      {
        value:4,
        label:"Owning Business"
      },
      {
        value:5,
        label:"Artist"
      }
   ]
    

   const handleChange = e => {
      
      changeProf(e.label);
   }

    return(
         <div>
           <Select
              options={profession} 
              placeholder="Select Profession"
              onChange={handleChange}
              required
           />
           
         </div>
    ) ;
   
}

export default Dropdowns;