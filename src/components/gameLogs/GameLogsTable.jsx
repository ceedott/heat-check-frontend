import GameLogRow from './GameLogRow';

function GameLogsTable({ gameLogs }) {
        // date, team, opp, result, mp, pts, orb, drb, trb, ast, fg, fga, fg%, 3p, 3pa, 3p%, ft, fta, ft%, blk, stl, tov, +/-
    return (

        <table className="game-logs-table">
            <thead >
                <tr>
                    <th>Date</th>
                    <th>Team</th>
                    <th>Opp</th>
                    <th>W/L</th>
                    <th>MP</th>
                    <th>PTS</th>
                    <th>OREB</th>
                    <th>DREB</th>
                    <th>REB</th>
                    <th>AST</th>
                    <th>FG</th>
                    <th>FGA</th>
                    <th>FG%</th>
                    <th>3P</th>
                    <th>3PA</th>
                    <th>3P%</th>
                    <th>FT</th>
                    <th>FTA</th>
                    <th>FT%</th>
                    <th>BLK</th>
                    <th>STL</th>
                    <th>TOV</th>
                    <th>+/-</th>
                </tr>
            </thead>

            <tbody>
                {gameLogs.map(
                    (gameLog) => (<GameLogRow gameLog={gameLog} key={gameLog.id} />))}
            </tbody>
        </table>

        

    );
}

export default GameLogsTable;