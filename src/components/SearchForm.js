import React, { useState } from 'react'
import { Button, Col, Row, Form, Alert} from "react-bootstrap";
import { fetchData } from '../utils/axiosHelper';
import { CustomCard } from './CustomCard';
export const SearchForm = ({func}) => {

  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);

  const handleOnChange = (e) =>{
    const {value} =e.target;
  
    setForm(value);
    
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
   setMovie({});
   setIsError(false);

    const {data} = await fetchData(form);

   if (data.Response === "True"){
    setMovie (data);

   }else {
    setIsError(true);
   }

   

    

  }

  return (
    <div className='bg-dark py-5 rounded p-3'> 
    <Form onSubmit = {handleOnSubmit} >
      <Row className='g-3'>
        <Col className='d-flex justify-content-center'>
          <Form.Control onChange= {handleOnChange} placeholder="Type Movie name" required /> {" "}
        </Col>
        <Col>
        
        <Button varient ="primary" type="submit">Search </Button>
       

          
        </Col>
      </Row>
    </Form>
    <div className="mt-3 d-flex justify-content-center">
      {
        movie.imdbID && <CustomCard movie={movie} func ={func} /> }
        {isError && (
        <Alert variant = "danger"> No movies found, change the name and search it again.</Alert>
        )} 
        </div>
    </div>
  )
}
