import React from 'react';
import '../Login/login.scss';
import Logo from "../../Assets/Images/logo.svg";
import { Context } from '../../Context/Authentication';

function Login() {

  const { setToken } = React.useContext(Context);
  const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data?.token));
	};

  return (
    <>
        <div className='login__wrapper'>
        <div className='login__box'>
        <img className='login__img' src={Logo} alt="logo-youtube" />
        <h1 className='login__title'>Log in to Youtube</h1>
        <form className='login__form' onSubmit={handleSubmit}>
            <input required className='login__email' type="email" name='user_email' defaultValue='eve.holt@reqres.in' placeholder='Phone number, email address' />
            <input required className='login__password' type="password" name='user_password' defaultValue='cityslicka' placeholder='Password' />
            <button type='submit' className='login__btn'>Log In</button>
        </form>
        <div className='login__link-box'>
            <p className='login__link'>Forgot password?</p>
            <p className='login__link'>Sign up to Youtube</p>
        </div>
        </div>
    </div>
    </>
  );
}

export default Login;