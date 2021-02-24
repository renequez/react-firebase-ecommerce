import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './authentication.scss';

const AuthenticationPage = () => {
	return (
		<div className='authentication-page'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default AuthenticationPage;
