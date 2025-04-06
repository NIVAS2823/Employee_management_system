import { Component } from "react";
import EmployeeService from "../Service/EmployeeService";
import {Link} from 'react-router-dom';

class EmployeeListComponent extends Component{

    constructor(){
        super();

        this.state = {
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then(res=>{
            this.setState({employees:res.data})
        })
    }
    deleteEmployee=(employeeId)=>{
        EmployeeService.deleteEmployee(employeeId).then(res=>{
            EmployeeService.getEmployees().then(res=>{
                this.setState({employees:res.data})
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    


    render(){
        return(
            <div className="container mt-5">
                <h3>Employees List</h3>
                <div className="row mt-5">

                    <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
                    <table className="table table-bordered  table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee=>{
                                    return<tr key={employee.id}>
                                        
                                        <td>{employee.id}</td>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <Link to={`/update-employee/${employee.id}`} className="btn btn-primary mx-3">Update</Link>
                                            <button className="btn btn-danger mx-3" onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}
export default EmployeeListComponent;