import {useState, useEffect} from 'react';
import './App.scss';
import Card from './components/Card/Card';

// background for application i.e. image pulled from Nasa goes in here

// IF URL IS VIDEO, DON'T USE IT
// imporove api call, some of the images are not attractive and also don't take up the whole screen

function App() {
	const [image, setImage] = useState<null | string>(null)

	useEffect(() => {
		console.log('useEffect running');
		fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1`)
		.then(res => res.json())
		.then(data => {
			console.log(data[0].url);
			setImage(data[0].url)
		})
		.catch(err => {
			console.log(err);
		})
	}, [])

	return (
		<div className="App">
			<img src={image ? image : ''} alt="Nasa Space Image" />
			<Card/>
		</div>
	);
}

export default App;
