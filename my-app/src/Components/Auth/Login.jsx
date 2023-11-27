import React,{useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookies';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


export default function Login({state}) {
  const apiUrl = 'http://localhost:3001/auth/login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  
  // Menggunakan Axios untuk melakukan permintaan GET ke API
  const componentHandler = () => {
    state();
  }

  const submitHandler= async (event) => {
    // setUser({email : email, password: password});
    event.preventDefault();
    setIsloading(true);
    try{
      const response = await axios.post(apiUrl, 
        {
          email: email,
          password: password
        },
        {
          headers:{"Content-Type": "application/json"}
          
        });
        Cookies.setItem('jwt',(response.data.token), { expires: (jwtDecode(response.data.token).exp) });
        setIsloading(false);
        if (response.status === 201) {
          // Perform actions for successful login
          // For example, set tokens or user data in local storage or state
  
          // After successful login, navigate to the desired page
          localStorage.setItem('pengguna', JSON.stringify(response.data.pengguna));
          if (response.data.pengguna.role=="admin"){
            setTimeout(navigate('/adminhome'),500);
          }else{
            setTimeout(navigate('/profile'),500); // Replace '/dashboard' with your desired route
          }
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
            {isLoading && <div className="w-screen h-screen position-fixed top-50 start-50"><svg width="50" className="spinner" height="50" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
            stroke="black"
          />
        </svg></div>
          }
            <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
            {!valid && <div style={{width:"60%"}} className='bg-danger-subtle p-1 m-1 row' ><span className='col-11'>Invalid email or password</span><button onClick={()=>setValid(!valid)} className='me-0 p-0 col-1 bg-transparent border-0'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg></button></div>}
            <form onSubmit={submitHandler} className="mb-3 bg-white rounded py-5 px-3 opacity-75 position-relative" style={{width:"60%",height:"80%"}}>
              <h1 style={{fontFamily:"Poppins", fontWeight: "bold", textAlign: "center"}}>LOGIN</h1>
              <label  className="form-label py-1" style ={{ fontFamily:"Poppins"}}>Email address</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="form-control border-1"
                style={{
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  height: "7%",
                }}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
              />
              <label  className="form-label py-1"style ={{ fontFamily:"Poppins"}}>Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="form-control border-1"
                style={{
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  height: "7%",
                }}
                id="exampleFormControlInput1"
                placeholder="Input your password"
                value={password}
              />

              <h5 className='fs-6 text-end mt-1 pe-1' style={{textDecoration:"none", fontFamily:"Poppins" }}><a href="#">forget password?</a></h5>
              <button type="submit" className='position-absolute w-75 rounded-pill py-1 text-white' style={{bottom:"25%",marginLeft:"9%",height:"8%",backgroundImage:"linear-gradient(#29C4F4, #113D76)",border:"none" ,fontFamily:"Poppins",fontWeight: "bold",}}>LOGIN</button>
              <div className='position-absolute w-100' style={{bottom:"18%"}}>
                  <h5 className='fs-6 text-center' style={{textDecoration:"none", fontFamily:"Poppins", marginTop: "10px"}}>Don't have an account? <a href="#" onClick={componentHandler}>Signup here</a></h5>
              </div>
            </form>

            </div>
    </>
  );
}
