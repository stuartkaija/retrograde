import React from 'react';
import './App.scss';
import Card from './components/Card/Card';

function App() {
	return (
		<div className="App">
			<h1>Is Mercury in Retrograde?</h1>
			{/* card with button and answer below */}
			<Card/>
		</div>
	);
}

export default App;
