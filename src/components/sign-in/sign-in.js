import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail('');
			setPassword('');
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your e-mail and password.</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					handleChange={handleChange}
					type='email'
					name='email'
					id='email'
					value={email}
					label='E-mail'
					required
				/>
				<FormInput
					handleChange={handleChange}
					type='password'
					name='password'
					id='password'
					value={password}
					label='Password'
					required
				/>

				<div className='buttons'>
					<CustomButton type='submit'>SIGN IN</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
