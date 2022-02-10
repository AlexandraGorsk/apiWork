import { Provider } from 'react-redux';
import './App.css';
import Header from './containers/Header';
import Posts from './containers/Posts';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Posts />
		</Provider>
	);
}

export default App;
