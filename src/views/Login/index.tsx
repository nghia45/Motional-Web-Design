import { useState } from 'react'
import './index.css'
import Logo from '../../assets/images/logo-nn.svg';
import Hero from '../../assets/images/6170426_3054594.svg';
import { useNavigate } from 'react-router-dom';


type Props = {}

const Login = ({ }: Props) => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');

  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
      navigate('/home', { replace: true });
    }, 6000);
  }

  const initialLoginAnimation = async () => {
    if (userName !== '' && password !== '') {
      const submitButton = document.querySelector('#btn-submit');
      const submitButtonText = document.querySelector('#btn-submit .button--text');
      const infoText = document.querySelector('.notes');

      submitButton!.classList.add('loading');

      setTimeout(() => {
        submitButton!.classList.remove('loading');
        submitButton!.classList.add('success');

        submitButtonText!.innerHTML = 'Login successful!';
        infoText!.innerHTML = 'Redirecting to home page...';
      }, 3000);

      handleLogin();
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="well">
          <img src={Logo} alt="Logo" />

          <form>
            <hgroup>
              <h1>Welcome back!</h1>
              <h2>Log in to your account.</h2>
            </hgroup>

            <div>
              <input type="text" name="login-username" id="login-username" value={userName} onChange={(e) => { setUserName(e.target.value) }} required />
              <label htmlFor="login-username">Username</label>
            </div>

            <div>
              <input type="password" name="login-pwd" id="login-pwd" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
              <label htmlFor="login-pwd">Password</label>
            </div>

            <a href="#" id="forgot-pwd">Forgot Password?</a>

            <div>
              <i className='notes'>*This is for animation development showcases. No authentication in used!</i>
            </div>

            <button className="button" id="btn-submit" type='submit' onClick={(e) => {
              if(userName !== '' && password !== '') e.preventDefault();
              initialLoginAnimation()
            }}>
              <span className="button--text">Log In</span>

              <div className="button--loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </form>

          <p>Don't have an account? <a href="#">Sign Up</a>.</p>
        </div>

        <img src={Hero} alt="Captain" style={{ height: "80%" }} />
      </div>
    </div>
  )
}

export default Login