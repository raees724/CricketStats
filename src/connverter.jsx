// src/Converter.js
import React, { useState } from 'react';

const Converter = () => {
    const initialFootballStats = {
        possession: null,
        shots: null,
        shotsOnTarget: null,
        fouls: null,
        offsides: null,
        cornerKicks: null,
        freeKicks: null,
        passes: null,
        successfulPasses: null,
        interceptions: null,
        crosses: null,
        tackles: null,
        saves: null,
    };

    const initialCricketResults = {
        runs: 0,
        wickets: 0,
        strikeRate: 0,
        extras: 0,
        economy: 0,
    };

    const [footballStats, setFootballStats] = useState(initialFootballStats);
    const [cricketResults, setCricketResults] = useState(initialCricketResults);


    const convertStatsToCricket = () => {
        const runs = footballStats.shotsOnTarget * 4 + (footballStats.shots - footballStats.shotsOnTarget) + footballStats.successfulPasses + (footballStats.crosses * 2); // Example conversion logic
        const wickets = Math.floor((footballStats.interceptions + footballStats.tackles) / 10);
        const extras = footballStats.fouls + footballStats.cornerKicks + footballStats.crosses;
        const strikeRate = runs / (footballStats.possession / 100);
        const economy = (footballStats.interceptions + footballStats.tackles + footballStats.saves) / footballStats.shotsOnTarget;

        setCricketResults({ runs, wickets, extras, strikeRate, economy });
    };

    const resetForm = () => {
        setFootballStats(initialFootballStats);
        setCricketResults(initialCricketResults);
    };


    const handleStatChange = (event) => {
        const { name, value } = event.target;
        setFootballStats(prevStats => ({
            ...prevStats,
            [name]: value ? Number(value) : null, // Update to null if the field is cleared
        }));
    };

    return (
        <div>
            <h2>Convert Football Stats to Cricket</h2>
            <form onSubmit={e => e.preventDefault()}>
                {Object.keys(footballStats).map((stat) => (
                    <div key={stat}>
                        <label>
                            {stat.charAt(0).toUpperCase() + stat.slice(1)}:
                            <input
                                type="number"
                                name={stat}
                                value={footballStats[stat] === null ? '' : footballStats[stat]}
                                onChange={handleStatChange}
                            />

                        </label>
                    </div>
                ))}
            </form>
            <button onClick={convertStatsToCricket}>Convert</button>
            <button type="button" onClick={resetForm}>Reset</button> {/* Reset button */}
            <div>
                <h3>Cricket Results</h3>
                <p>Runs: {cricketResults.runs}</p>
                <p>Wickets: {cricketResults.wickets}</p>
                <p>Strike Rate: {cricketResults.strikeRate}</p>
                <p>Extras: {cricketResults.extras}</p>
                <p>Economy: {cricketResults.economy}</p>
            </div>
        </div>
    );
};

export default Converter;
