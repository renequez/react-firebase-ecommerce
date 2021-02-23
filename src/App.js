import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</Router>
	);
}

export default App;
