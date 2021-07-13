import React, {useState} from 'react'
import Layout from '../core/Layout'
import '../styles/forms.css';
import axios from 'axios';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== password2){
      setMessage('Passwords do not match.');
    }else {
      const config = {
        headers: {'Access-Control-Allow-Origin':'http://localhost:5000'}
      }
      axios.post('http://localhost:5000/auth/register', {name, email, password}, config )
    }
    
  }
  return (
    <Layout>
      <div className="form-container" id="regcon">
        <div className="message">
          {message}
        </div>
        <form className="form" id="regform" onSubmit={submitHandler}>
            <h2>Register</h2>
            <input type='text' id='name' placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='password' placeholder="confirm password" id='password2' value={password2} onChange={(e) => setPassword2(e.target.value)} />
          <button id="regbut"></button>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterScreen
