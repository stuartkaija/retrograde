import {useState} from 'react';
import './Card.scss';

// response arrays - ***this doesn't look very typescript-y right now, research how arrays (consisitng of strings) work in TS
const inRetrogradeArray: readonly string[] = [
    "Oh no...ohhhhh no...(yes Mercury is in retrograde)",
    "Yeah. Better not go outside!",
    "Yes.",
    "It is in retrograde - expect communication breakdowns and foul weather.",
    "it is in retrograde - expect the unexpected.",
    "The configuration of Scorpio's apex, combined with a diurnal focus on Neptune suggests that the undercarriage of Orion's belt will occur next Saturday at 11:47PM...which is to say, yes, Mercury is in retrograde. ",
    "Maybe...(yeah :( )",
    "Um. Uhhhhh. Yeaaaah. Yeah it is.",
    "Retrograde...what a cool word!",
];
  
const notInRetrogradeArray: readonly string[] = [
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

export default function Card() {
    const [inRetrograde, setInRetrograde] = useState<boolean | null>(null);
    const [sentence, setSentence] = useState<string>("");

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max)
    }
    
    function getRandomString(array: readonly String[]) {
        let randomNum = getRandomInt(array.length);
        setSentence(inRetrogradeArray[randomNum]);
        return array[randomNum];
    }

    // api call

    return (
        <div className="card">
            <h1>Is Mercury in Retrograde?</h1>
            {/* button click makes API call checking if mercury is in retrograde,
            then depending on if it is or not, we update state of inRetrograde,
            then update state of sentence */}
            <button onClick={() => getRandomString(inRetrogradeArray)} className="card__button">Click me</button>
            <p className="card__response">{sentence}</p>
        </div>
    )
}
