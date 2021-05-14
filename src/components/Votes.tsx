import { useState } from 'react';
import './Votes.css';

function Votes() {
    const [ cookieVotes, setCookieVotes ] = useState(0);
    const [ vanillaVotes, setVanillaVotes ] = useState(0);
    const [ matchaVotes, setMatchaVotes ] = useState(0);

    let cookieVoteNum = cookieVotes;
    let vanillaVoteNum = vanillaVotes;
    let matchaVoteNum = matchaVotes;
    let totalVotes = cookieVotes + vanillaVotes + matchaVotes;

    const cookieVoteBar = {
        width: calcShareOfVote(cookieVotes).toFixed(1) + "vw"
    };
    const vanillaVoteBar = {
        width: calcShareOfVote(vanillaVotes).toFixed(1) + "vw"
    };
    const matchaVoteBar = {
        width: calcShareOfVote(matchaVotes).toFixed(1) + "vw"
    };

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
            <p><h3>Cookies &amp; Cream: </h3>{cookieVoteNum}({calcShareOfVote(cookieVotes).toFixed(1)}%)</p>
            <div className="CookieVotes" style={cookieVoteBar}>voting bar cookies/cream</div>
            <p><h3>Vanilla Bean: </h3>{vanillaVoteNum}({calcShareOfVote(vanillaVotes).toFixed(1)}%)</p>
            <div className="VanillaVotes" style={vanillaVoteBar}>voting bar vanilla bean</div>
            <p><h3>Matcha Tea: </h3>{matchaVoteNum}({calcShareOfVote(matchaVotes).toFixed(1)}%)</p>
            <div className="MatchaVotes" style={matchaVoteBar}>voting bar matcha tea</div>
        </div>
    )
}



export default Votes;