import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from "../Service/EmployeeService";

function CreateEmployeeComponent() {

  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setEmployee({...employee,[name]:value});
  }

  const saveHandle =(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then(res=>{
      navigate("/employees");
    })
  }

  const handleCancel = (e) => {
      e.preventDefault();
    navigate("/employees");
  };

  return (
    <div className='container mt-4'>
      <div className='card col-md-6 offset-md-3'>
        <h4 className="text-center pt-3">Add Employee</h4>
        <div className='card-body'>
          <form>
            <div className="form-group row mb-3">
              <label htmlFor="firstname" className="col-sm-3 col-form-label text-end" >Firstname:</label>
              <div className="col-sm-9">
                <input type='text' name='firstname' id='firstname' className='form-control' value={employee.firstname} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="lastname" className="col-sm-3 col-form-label text-end">Lastname:</label>
              <div className="col-sm-9">
                <input type='text' name='lastname' id='lastname' className='form-control'  value={employee.lastname} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="email" className="col-sm-3 col-form-label text-end">Email:</label>
              <div className="col-sm-9">
                <input type='text' name='email' id='email' className='form-control' value={employee.email} onChange={handleChange}/>
              </div>
            </div>
            <div className='text-center'>
              <button type="button" onClick={handleCancel} className='btn btn-danger mx-2'>Cancel</button>
              <button type="submit"  className='btn btn-success mx-2' onClick={saveHandle}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;
