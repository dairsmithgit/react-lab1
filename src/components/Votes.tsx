import { useState } from 'react';
import './Votes.css';

function Votes() {
    const [ cookieVotes, setCookieVotes ] = useState(0);
    const [ vanillaVotes, setVanillaVotes ] = useState(0);
    const [ matchaVotes, setMatchaVotes ] = useState(0);

    let cookieVoteNum = cookieVotes;
    let vanillaVoteNum = vanillaVotes;
    let matchaVoteNum = matchaVotes;


    // buttons need onClick func to increment vote variables
    return (
        <div className="Votes">
            <h1>Vote Here</h1>
            <p>
               <button>Cookies &amp; Cream</button>
               <button>Vanilla Bean</button>
               <button>Matcha Tea</button>
            </p>
            <p><h3>Cookies &amp; Cream: </h3>{cookieVoteNum}</p>
            <div className="CookieVotes">voting bar cookies/cream</div>
            <p><h3>Vanilla Bean: </h3>{vanillaVoteNum}</p>
            <div className="VanillaVotes">voting bar vanilla bean</div>
            <p><h3>Matcha Tea: </h3>{matchaVoteNum}</p>
            <div className="MatchaVotes">voting bar matcha tea</div>
        </div>
    )
}



export default Votes;