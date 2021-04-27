import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { pagePaths } from './utls/constants';
import Appbar1 from './pages/Appbar1';
function App() {
	return (
		<Router>
			<Switch>
				<Route path={pagePaths.home} exact component={MainPage} />
				<Route path={pagePaths.appbar1} component={Appbar1} />
			</Switch>
		</Router>
	);
}

export default App;
