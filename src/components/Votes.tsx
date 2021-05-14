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
        width: calcShareOfVote(cookieVotes).toFixed(1) + "%"
    };
    const vanillaVoteBar = {
        width: calcShareOfVote(vanillaVotes).toFixed(1) + "%"
    };
    const matchaVoteBar = {
        width: calcShareOfVote(matchaVotes).toFixed(1) + "%"
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
        if (totalVotes) {
            return (votes / totalVotes) * 100;
        } else {
            return 0;
        }
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
            <div className="CookieVotes" style={cookieVoteBar}></div>
            <p><h3>Vanilla Bean: </h3>{vanillaVoteNum}({calcShareOfVote(vanillaVotes).toFixed(1)}%)</p>
            <div className="VanillaVotes" style={vanillaVoteBar}></div>
            <p><h3>Matcha Tea: </h3>{matchaVoteNum}({calcShareOfVote(matchaVotes).toFixed(1)}%)</p>
            <div className="MatchaVotes" style={matchaVoteBar}></div>
        </div>
        )
}



export default Votes;