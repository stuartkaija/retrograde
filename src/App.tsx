import {useState, useEffect} from 'react';
import './App.scss';
import Card from './components/Card/Card';

// background for application i.e. image pulled from Nasa goes in here


function App() {
	const [image, setImage] = useState<null | string>(null)

	useEffect(() => {
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
