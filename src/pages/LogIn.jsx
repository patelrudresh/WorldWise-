import '../style/Form.css'
function LogIn() {
  return (
    <main className="page">
          
    <form className="login-form">
       <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <div className="form-group">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password"  min={3} required/>
        </div>

        <button type="submit" className="login-btn">
          Log In
        </button>
    </form>
    </main>
  )
}

export default LogIn
