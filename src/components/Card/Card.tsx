import {useState, useEffect} from 'react';
import './Card.scss';

const inRetrogradeArray: string[] = [
    "Oh no...ohhhhh no...(yes Mercury is in retrograde)",
    "Yeah. Better not go outside!",
    "Yes.",
    "Yep - expect communication breakdowns and foul weather.",
    "It is in retrograde - expect the unexpected.",
    "The configuration of Scorpio's apex, combined with a diurnal focus on Neptune suggests that the undercarriage of Orion's belt will occur next Saturday at 11:47PM...which is to say, yes, Mercury is in retrograde. ",
    "Maybe...(yeah :( )",
    "Um. Uhhhhh. Yeaaaah. Yeah it is.",
    "Retrograde...what a cool word!",
];
  
const notInRetrogradeArray: string[] = [
    "Phew - not today!",
    "Nope definitely not, nooooo way, not today.",
    "Non (that's French for no).",
    "Nay!",
    "Nooooooot today!",
    "With the passing of the Solar plexus out of alignment with Saturn's left axis, Mercury is...NOT in retrograde.",
    "Retrograde...what a cool word!",
    "No! Thank goodness...",
    "Yes...wait! No! Wait...",
    "I can confidently say that Mercury is probably, most likely, not in retrograde.",
    "It is............not.",
];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}

function getRandomString(array: string[]) {
    let randomNum = getRandomInt(array.length);
    return array[randomNum];
}

export default function Card() {
    const [sentence, setSentence] = useState<string>("");

    // api call to mercury in retrograde, update sentence based on response
    function clickHandler() {
        console.log('api call running')
		fetch('https://mercuryretrogradeapi.com')
            .then(res => res.json())
            .then(data => {
                if (data.is_retrograde) {
                    setSentence(getRandomString(inRetrogradeArray));
                } else {
                    setSentence(getRandomString(notInRetrogradeArray));
                }
            })
            .catch(err => console.log(err));
        }

    return (
        <div className="card">
            <h1>Is Mercury in Retrograde?</h1>
            <button onClick={clickHandler} className="card__button">Click me</button>
            <p className="card__response">{sentence}</p>
        </div>
    )
}
