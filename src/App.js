import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ForgotPasswordone from './pages/ForgotPasswordone/ForgotPasswordone'
import Dashboard from './pages/Dashboard/Dashboard';
import ContactUs from './pages/ContactUs/ContactUs';
import Help from './pages/Help/Help';
import ForgotPasswordtwo from './pages/ForgotPasswordtwo/ForgotPasswordtwo';
import ForgotPasswordthree from './pages/ForgotPasswordthree/ForgotPasswordthree';
import Admin from './pages/Admin/Admin';
import CreateAdmin from './pages/CreateAdmin/CreateAdmin';
import Employees from './pages/Employees/Employees';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact to path='/' element={<Signin/>} />
      <Route exact to path='/Signup' element={<Signup/>} />
      <Route exact to path='/ForgotPassword' element={<ForgotPassword/>} />
      <Route exact to path='/ForgotPasswordone' element={<ForgotPasswordone/>} />
      <Route exact to path='/ForgotPasswordtwo' element={<ForgotPasswordtwo/>} />
      <Route exact to path='/ForgotPasswordthree' element={<ForgotPasswordthree/>} />
      <Route exact to path='/Dashboard' element={<Dashboard/>}  />
      <Route exact to path='/ContactUs' element={<ContactUs/>} />
      <Route exact to path='/Help' element={<Help/>} />
      <Route exact to path='/Admin' element={<Admin/>} />
      <Route exact to path='/CreateAdmin' element={<CreateAdmin/>} />
      <Route exact to path='/Employees' element={<Employees/>} />
      <Route exact to path='/CreateEmployee' element={<CreateEmployee/>} />
      <Route exact to path='/Navbar' element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;