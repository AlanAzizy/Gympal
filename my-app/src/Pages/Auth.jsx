import React,{useState} from 'react';
import axios from 'axios'
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import bg from '../Assets/login-bg.jpg';
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router';


export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({})
  const [isRegistered, setIsRegistered] = useState(true);
  
  // Menggunakan Axios untuk melakukan permintaan GET ke API
  return (<>
  <div className="position-relative" style={{height:"100vh", width:"100vw"}}>
      <img src={bg} className='w-100 h-100 position-absolute' style={{zIndex:"-1"}}/>
        <div className='row position-absolute w-100 h-100'>
        <div className='col-6 d-flex justify-content-center align-items-center'>
          <img src={logo} className='' style={{width : "30vw",height:"30vw"}}></img>    
        </div>
          {isRegistered ? <Login  state={()=>setIsRegistered(!isRegistered)}/> : <Register state={()=>setIsRegistered(!isRegistered)}/>}    
        </div>
      </div>
    </>
  );
}
