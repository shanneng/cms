import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        number: ''
    }) 

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/contacts', {'name': inputData.name,  'email': inputData.email, 'number': inputData.number})
        .then(res=> {
            setInputData(res.data)
            alert("Data has been recorded")
            navigate('/')
        })
    }
    
  return (
    <div  className='d-flex w-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value= {inputData.name}
                    onChange = {e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' value = {inputData.email}
                    onChange = {e => setInputData({...inputData, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="number">Phone Number:</label>
                    <input type="number" name='number' className='form-control' value = {inputData.number}
                    onChange = {e => setInputData({...inputData, number: e.target.value})}/>
                </div><br/>
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create