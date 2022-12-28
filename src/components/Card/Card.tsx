import {useState, useEffect} from 'react'
import './Card.scss';

// response arrays - ***this doesn't look very typescript-y right now, research how arrays (consisitng of strings) work in TS
const inRetrogradeArray = [
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
  
const notInRetrogradeArray = [
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
    "It is............not."
];

export default function Card() {
    const [inRetrograde, setInRetrograde] = useState(null)

    return (
        <div>
            <button>Click me</button>
            <p>Answer goes here dynamically</p>
        </div>
    )
}
