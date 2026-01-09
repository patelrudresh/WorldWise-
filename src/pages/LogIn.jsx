import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import '../style/Form.css'
import { useState } from 'react';
function LogIn() {

   const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");


const { login } = useAuth();

  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    try{
      login(email,password)
      navigate("/app")
    }catch(err){
      setError(err.message)
    }
  }
  return (
    <main className="page">
          
    <form className="login-form" onSubmit={handleSubmit}>
       <h2>Welcome Back </h2>
        <p>Please login to your account</p>
    {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-group">
          <input type="email" placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
         
          <input type="password" placeholder="Password"  min={3} required
          value={password}
        onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className ="login-btn">
          Log In
        </button>
    </form>
    </main>
  )
}

export default LogIn
