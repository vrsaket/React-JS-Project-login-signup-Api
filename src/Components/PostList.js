import React,{ useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap"
import Header from './Header';


function PostList() {
    const [category,setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    const [sort, setSort] = useState("");

    const handlePost = e => {
        e.preventDefault();

        if(category === "" || language === "" ||
         genre === "" ){
             return toast("one or field are not filled" ,{
                 type:'error'
             })
         }

         console.log({category,sort,language});
         let data = {category,language,genre,sort};

         fetch("https://hoblist.com/api/movieList",{
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type' :'application/json'
             },
             body:JSON.stringify(data)
         }).then((res) =>{
            //  console.warn("result",res);
            res.json().then((result) => {
                console.warn("respone", result)
            })
         })

    }


    return (
        <div style={{marginTop:"20%"}}>
           <Header />
           <Form>
               <FormGroup>
                   <ToastContainer position="bottom-right"/>
                <Label for="exampleMovie" className="inputMargin">Category  </Label>
                  <Input type="text" name="movie" id="movie" 
                    placeholder="Movie"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                  />  

                <Label for="examplelanguage" className="mt-3 ">Language  </Label>
                  <Input type="text" name="language" id="language" 
                    placeholder="Kannada"
                    value={language}
                    onChange={e => setLanguage(e.target.value)}
                    required
                  />  

                <Label for="exampleGenre" className="mt-3">Genre  </Label>
                  <Input type="text" name="genre" id="genre" 
                    placeholder="all"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    required
                  />  

                  <Label for="examplesort" className="mt-3">Sort  </Label>
                  <Input type="text" name="sort" id="sort" 
                    placeholder="voting"
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    required
                  />  

               <div className="text-center">
                 <Button onClick={handlePost} type="submit"
                 className="btn-lg btn-warning btn-block px-5"
                 style={{marginTop :"4em"}}>Post Request</Button>
               </div>
                   
               </FormGroup>
           </Form>
            
        </div>
    )
}

export default PostList
