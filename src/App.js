import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import AuthenticationPage from './pages/authentication/authentication';
import Header from './components/header/header';

import './App.css';

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(async (authUser) => {
			if (authUser) {
				const userRef = await createUserProfileDocument(authUser);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUser(authUser);
			}
		});
	}, []);

	console.log(currentUser);

	return (
		<Router>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/auth' component={AuthenticationPage} />
			</Switch>
		</Router>
	);
}

export default App;
