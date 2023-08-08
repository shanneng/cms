import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Update() {
    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: '',
        email: '',
        number: ''
    })

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/contacts/' + id)
        .then(res => setInputData(res.data))
        .catch(err => console.log())
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5000/contacts/'+ id, inputData)
        .then(res=> {
            alert("Data has been updated")
            navigate('/')
        })
    }
    
  return (
    <div  className='d-flex w-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange = {e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' value={inputData.email}
                    onChange = {e => setInputData({...inputData, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="number">Phone Number:</label>
                    <input type="number" name='number' className='form-control' value={inputData.number}
                    onChange = {e => setInputData({...inputData, number: e.target.value})}/>
                </div><br/>
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
)
}

export default Update