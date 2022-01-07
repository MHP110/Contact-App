import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import routes from './routes';
import { useState } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact/AddContact';

function App() {
	const [contacts, setContacts] = useState({ name: '', email: '' });
	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<main className=''>
			{/* <Layout>
				<Switch>
					{routes.map((route) => (
						<Route {...route} />
					))}
				</Switch>
			</Layout> */}
			<Header />
			<AddContact onSubmit={submitHandler} />
		</main>
	);
}

export default App;
