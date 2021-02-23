import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
	return (
		<nav className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{currentUser ? (
					<>
						<div className='option'>
							<img
								className='option-avatar'
								src={currentUser.photoURL}
								alt='User Avatar'
							/>
							<div className='option-user'>{currentUser.displayName}</div>
						</div>
						<div className='option' onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					</>
				) : (
					<Link className='option' to='/auth'>
						SIGN IN
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Header;
