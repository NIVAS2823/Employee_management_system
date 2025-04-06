import React from 'react'
import EmployeeListComponent from './Components/EmployeeListComponenet'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponent/> 
      <BrowserRouter>
    <div className='text-center'>
      <Routes>
      <Route path='/' element={<EmployeeListComponent/>}></Route>
      <Route path='/employees' element={<EmployeeListComponent/>}></Route>
      <Route path='/add-employee' element={<CreateEmployeeComponent/>}></Route>
      <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
      <FooterComponent/>
    </div>
  )
}

export default App
