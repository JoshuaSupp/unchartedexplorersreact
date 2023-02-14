import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ForgotPassword1 from './pages/ForgotPassword/ForgotPassword1';
import ForgotPassword2 from './pages/ForgotPassword/ForgotPassword2';
import ForgotPassword3 from './pages/ForgotPassword/ForgotPassword3';
import Dashboard from './pages/Dashboard/Dashboard';
import ContactUs from './pages/ContactUs/ContactUs';
import Help from './pages/Help/Help';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact to path='/' element={<Signup/>} />
      <Route exact to path='/Signin' element={<Signin/>} />
      <Route exact to path='/ForgotPassword' element={<ForgotPassword/>} />
      <Route exact to path='/ForgotPassword1' element={<ForgotPassword1/>} />
      <Route exact to path='/ForgotPassword2' element={<ForgotPassword2/>} />
      <Route exact to path='/ForgotPassword3' element={<ForgotPassword3/>} />
      <Route exact to path='/Dashboard' element={<Dashboard/>} />
      <Route exact to path='/ContactUs' element={<ContactUs/>} />
      <Route exact to path='/Help' element={<Help/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;