import RegistrationForm from './components/registration/index'
import Profile from './components/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/*" element = {<RegistrationForm/>}/>
        <Route path ="/profile" element = {<Profile/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;