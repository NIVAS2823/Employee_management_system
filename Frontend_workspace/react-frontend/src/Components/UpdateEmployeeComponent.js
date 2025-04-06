import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService';
import { Navigate } from 'react-router-dom';


function UpdateEmployeeComponent() {


    let navigate = useNavigate();

    const [firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[email,setEmail] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then(res=>{
            setFirstname(res.data.firstname);
            setLastname(res.data.lastname);
            setEmail(res.data.email);

        })
    },[])

    const cancelHandle=(e)=>{
        e.preventDefault();
        navigate("/employees")
    }
    
    const updateHandler=(e)=>{
        e.preventDefault();
        const employee = {firstname,lastname,email};

        if(id){
            EmployeeService.updateEmployee(id,employee).then(res=>{
                navigate("/employees");
            })
        }else{
            EmployeeService.createEmployee(employee).then(res=>{
                navigate("/employees")
            })
        }
    }


  return (
    <div className='container mt-4'>
    <div className='card col-md-6 offset-md-3'>
      <h4 className="text-center pt-3">Update Employee</h4>
      <div className='card-body'>
        <form>
          <div className="form-group row mb-3">
            <label htmlFor="firstname" className="col-sm-3 col-form-label text-end" >Firstname:</label>
            <div className="col-sm-9">
              <input type='text' name='firstname' id='firstname' className='form-control' value={firstname} 
               onChange={(e)=>setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="lastname" className="col-sm-3 col-form-label text-end">Lastname:</label>
            <div className="col-sm-9">
              <input type='text' name='lastname' id='lastname' className='form-control' value={lastname}
                onChange={(e)=>setLastname(e.target.value)}/>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="email" className="col-sm-3 col-form-label text-end">Email:</label>
            <div className="col-sm-9">
              <input type='text' name='email' id='email' className='form-control' value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div className='text-center'>
            <button type="button" className='btn btn-danger mx-2' onClick={cancelHandle}>Cancel</button>
            <button type="submit"  className='btn btn-success mx-2' onClick={updateHandler} >Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default UpdateEmployeeComponent;
