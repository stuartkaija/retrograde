import {useState, useEffect} from 'react';
import './App.scss';
import Card from './components/Card/Card';

// IF URL IS VIDEO, DON'T USE IT

function App() {
	const [image, setImage] = useState<null | string>(null)

	useEffect(() => {
		console.log('useEffect running');
		fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
		.then(res => res.json())
		.then(data => {
			setImage(data.hdurl)
		})
		.catch(err => {
			console.log(err);
		})
	}, [])

	return (
		<div className="App">
			<img className="App__image" src={image ? image : ''} alt="Nasa Photo of the Day"/>
			<Card/>
		</div>
	);
}

export default App;
