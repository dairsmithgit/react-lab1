import { useState } from 'react';
import './Votes.css';

function Votes() {
    const [ cookieVotes, setCookieVotes ] = useState(0);
    const [ vanillaVotes, setVanillaVotes ] = useState(0);
    const [ matchaVotes, setMatchaVotes ] = useState(0);

    let cookieVoteNum = cookieVotes;
    let vanillaVoteNum = vanillaVotes;
    let matchaVoteNum = matchaVotes;
    let totalVotes = 0;

    function increaseCookieVote() {
        setCookieVotes(prev => prev + 1);
        totalVotes++;
    }

    function increaseVanillaVote() {
        setVanillaVotes(prev => prev + 1);
        totalVotes++;
    }

    function increaseMatchaVote() {
        setMatchaVotes(prev => prev + 1);
        totalVotes++;
    }

    function calcShareOfVote(votes: number) {
        return (votes / totalVotes) * 100;
    }

    // buttons need onClick func to increment vote variables
    return (
        <div className="Votes">
            <h1>Vote Here</h1>
            <p>
               <button onClick={increaseCookieVote}>Cookies &amp; Cream</button>
               <button onClick={increaseVanillaVote}>Vanilla Bean</button>
               <button onClick={increaseMatchaVote}>Matcha Tea</button>
            </p>
            <p><h3>Cookies &amp; Cream: </h3>{cookieVoteNum}({calcShareOfVote(cookieVotes)}%)</p>
            <div className="CookieVotes">voting bar cookies/cream</div>
            <p><h3>Vanilla Bean: </h3>{vanillaVoteNum}({calcShareOfVote(vanillaVotes)}%)</p>
            <div className="VanillaVotes">voting bar vanilla bean</div>
            <p><h3>Matcha Tea: </h3>{matchaVoteNum}({calcShareOfVote(matchaVotes)}%)</p>
            <div className="MatchaVotes">voting bar matcha tea</div>
        </div>
    )
}



export default Votes;