import React,{useState} from 'react';
import axios from 'axios'
import Cookies from 'js-cookies';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


export default function Register({state}) {
  const apiUrl = 'https://gympalv1.ambitiousmoss-bd081c95.australiaeast.azurecontainerapps.io/auth/signup';
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [alamat, setAlamat] = useState('');
  const [noTelepon, setNoTelepon] = useState('');
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  
  // Menggunakan Axios untuk melakukan permintaan GET ke API
  const componentHandler = () => {
    state();
  }

  const submitHandler= async (event) => {
    // setUser({email : email, password: password});
    event.preventDefault();
    try{
      const response = await axios.post(apiUrl, 
        {
          nama : username,
          email: email,
          password: password,
          alamat : alamat,
          noTelepon : noTelepon
        },
        {
          headers:{"Content-Type": "application/json"}
          
        });
        Cookies.setItem('token',response.data.token, { expires: (jwtDecode(response.data.token).exp) });
        if (response.status === 201) {
          // Perform actions for successful login
          // For example, set tokens or user data in local storage or state
  
          // After successful login, navigate to the desired page
          const newData = response.data.anggota;
          newData.nama = username;
          newData.email = email;
          localStorage.setItem('pengguna', JSON.stringify(newData));
          setTimeout(navigate('/profile'),100); // Replace '/dashboard' with your desired route
        } else {
          // Handle unsuccessful login
          console.log('Login failed');
        }
    }catch(error) {
        setValid(false);;
        console.error('Error saat mengambil data:', error);
      };

  }
  return (<>
        <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
            {!valid && <div style={{width:"60%"}} className='bg-danger-subtle p-1 m-1 row' ><span className='col-11'>Invalid password or email has been registered</span><button onClick={()=>setValid(!valid)} className='me-0 p-0 col-1 bg-transparent border-0'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg></button></div>}
            <form onSubmit={submitHandler} className="mb-3 bg-white rounded py-3 px-3 opacity-75 position-relative" style={{width:"60%",height:"80%"}}>
              <h1>REGISTER</h1>
              <label  className="form-label py-1">Username</label>
              <input onChange={(event)=> setUserName(event.target.value)} type="text" className="form-control border-1" id="exampleFormControlInput1" placeholder="name@example.com" value={username} style={{height:"7%"}}/>
              <label  className="form-label py-1">Email address</label>
              <input onChange={(event)=> setEmail(event.target.value)} type="email" className="form-control border-1" id="exampleFormControlInput1" placeholder="name@example.com" value={email} style={{height:"7%"}}/>
              <label  className="form-label py-1">Password</label>
              <input onChange={(event)=> setPassword(event.target.value)} type="password" className="form-control border-1" id="exampleFormControlInput1" placeholder="input tour password" value={password} style={{height:"7%"}}/>
              <label  className="form-label py-1">Alamat</label>
              <input onChange={(event)=> setAlamat(event.target.value)} type="text" className="form-control border-1" id="exampleFormControlInput1" placeholder="Di mana alamat anda" value={alamat} style={{height:"7%"}}/>
              <label  className="form-label py-1">No Telepon</label>
              <input onChange={(event)=> setNoTelepon(event.target.value)} type="text" className="form-control border-1" id="exampleFormControlInput1" placeholder="08xxxxxx" value={noTelepon} style={{height:"7%"}}/>
              <button type="submit" className='position-absolute w-75 rounded-pill py-1 text-white' style={{bottom:"9%",marginLeft:"9%",height:"8%",backgroundImage:"linear-gradient(#29C4F4, #113D76)",border:"none"}}>REGISTER</button>
              <div className='position-absolute w-100' style={{bottom:"4%"}}>
                  <h5 className='fs-6 text-center' style={{textDecoration:"none"}}>Already sign up?<a href="#" onClick={componentHandler}>Login here</a></h5>
              </div>
            </form>
        </div>    
    </>
  );
}
