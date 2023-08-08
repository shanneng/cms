import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

function Home() {
    const [ data, setData ] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:5000/contacts')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleDelete (id) {
        const confirm = window.confirm("Do you like to delete?");
        if(confirm) {
            axios.delete('http://localhost:5000/contacts/' + id)
            .then(res => {
                alert("Record Deleted");
                navigate('/')
            })
        }
        window.location.reload();
      }

  return (
    <div className='container'>
        <nav className="navbar navbar-light navbar-expand-md shadow py-3">
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="index.html"><span className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span><span className="fw-bold">Contact Management System</span></a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div id="navcol-3" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item d-none"><i className="fas fa-home"></i><span className="ms-1">Home</span></li>
                    </ul>
                </div>
                {/* routing of create */}
                <span className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span>
                <Link to="/create" className='btn btn-success my-3' role="button">Add Contact</Link>
            </div>
        </nav>
        
        <div className="row mb-5">
            <div className="col">
                <div className="card shadow"></div>
                    <div className="card-body p-4">
                        <h4 className="card-title mb-3">List of Contacts</h4>
                            <div className="table-responsive">
                                <table className='table table-striped table-hover'>
                                    <thead>
                                        <tr className="table-primary fw-bold">
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td className="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((d,i)=> (
                                            <tr key={i}>
                                                <td>{d.id}</td>
                                                <td>{d.name}</td>
                                                <td>{d.email}</td>
                                                <td>{d.number}</td>
                                                <td className="text-center">
                                                    <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                                                    <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                                                    <Link className='text-decoration-none btn btn-sm btn-primary' to={`/view/${d.id}`}>View</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="table-primary fw-bold">
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Phone Number</td>
                                            <td className="text-center">Actions</td>
                                            </tr>
                                    </tfoot>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

