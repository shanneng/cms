import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function View() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/contacts/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log())
    }, [])

  return (
    <div className='container'>
        <div className='container p-5'>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone Number: {data.number}</p>
            <Link to='/'>Back</Link>
        </div>
    </div>
  )
}

export default View